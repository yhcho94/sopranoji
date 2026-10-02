import { NextResponse } from "next/server";

// 방문자 집계는 요청 시점마다 실행되어야 하므로 캐시하지 않는다.
export const dynamic = "force-dynamic";

// Vercel의 Upstash(Redis) 연동은 환경변수 이름을 두 가지로 주입하므로 둘 다 지원한다.
const REDIS_URL =
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

const TOTAL_KEY = "visits:total";
/** 일일 집계는 이틀치만 보관한다. */
const DAILY_TTL_SECONDS = 60 * 60 * 48;

/** 한국 시간 기준 날짜(YYYY-MM-DD)를 돌려준다. */
function todayKeyKST() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

type Counts = { total: number; today: number };

async function pipeline(commands: (string | number)[][]) {
  const res = await fetch(`${REDIS_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
    signal: AbortSignal.timeout(3000),
  });

  if (!res.ok) {
    throw new Error(`redis pipeline failed: ${res.status}`);
  }

  return (await res.json()) as { result?: unknown; error?: string }[];
}

function toCount(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

/** 방문 1회를 집계하고 누적/오늘 방문 수를 돌려준다. */
async function countVisit(): Promise<Counts> {
  const dailyKey = `visits:${todayKeyKST()}`;
  const results = await pipeline([
    ["INCR", TOTAL_KEY],
    ["INCR", dailyKey],
    ["EXPIRE", dailyKey, DAILY_TTL_SECONDS],
  ]);

  return { total: toCount(results[0]?.result), today: toCount(results[1]?.result) };
}

/** 집계하지 않고 현재 방문 수만 읽어온다. */
async function readVisits(): Promise<Counts> {
  const results = await pipeline([
    ["GET", TOTAL_KEY],
    ["GET", `visits:${todayKeyKST()}`],
  ]);

  return { total: toCount(results[0]?.result), today: toCount(results[1]?.result) };
}

function respond(counts: Counts) {
  return NextResponse.json(
    { configured: true, ...counts },
    { headers: { "Cache-Control": "no-store" } },
  );
}

const NOT_CONFIGURED = { configured: false as const };

export async function GET() {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return NextResponse.json(NOT_CONFIGURED, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    return respond(await readVisits());
  } catch {
    return NextResponse.json(NOT_CONFIGURED, {
      headers: { "Cache-Control": "no-store" },
    });
  }
}

export async function POST() {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return NextResponse.json(NOT_CONFIGURED, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    return respond(await countVisit());
  } catch {
    return NextResponse.json(NOT_CONFIGURED, {
      headers: { "Cache-Control": "no-store" },
    });
  }
}
