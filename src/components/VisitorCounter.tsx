"use client";

import { useEffect, useState } from "react";

/** 같은 브라우저 세션에서는 한 번만 집계해 새로고침으로 숫자가 부풀지 않게 한다. */
const STORAGE_KEY = "sopranoji-visit-counted";

const FALLBACK_BADGE =
  "https://hits.sh/sopranoji.vercel.app.svg?style=flat-square&label=visitors&color=c9a24b";

type VisitState =
  | { status: "loading" }
  | { status: "ready"; total: number; today: number }
  | { status: "fallback" }
  | { status: "hidden" };

function toCount(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function VisitorCounter() {
  const [state, setState] = useState<VisitState>({ status: "loading" });

  useEffect(() => {
    let alive = true;

    let counted = false;
    try {
      counted = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      counted = false;
    }

    fetch("/api/visits", { method: counted ? "GET" : "POST" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("bad status"))))
      .then((data: { configured?: boolean; total?: unknown; today?: unknown }) => {
        if (!alive) return;

        if (!data?.configured) {
          setState({ status: "fallback" });
          return;
        }

        if (!counted) {
          try {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } catch {
            // 저장이 막힌 브라우저에서도 표시는 그대로 진행한다.
          }
        }

        setState({
          status: "ready",
          total: toCount(data.total),
          today: toCount(data.today),
        });
      })
      .catch(() => {
        if (alive) setState({ status: "fallback" });
      });

    return () => {
      alive = false;
    };
  }, []);

  if (state.status === "loading") {
    return <span className="block h-4 w-28" aria-hidden="true" />;
  }

  if (state.status === "hidden") {
    return null;
  }

  if (state.status === "fallback") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={FALLBACK_BADGE}
        alt="방문자 수"
        className="h-4"
        // 외부 배지가 응답하지 않으면 깨진 이미지 대신 숨긴다.
        onError={() => setState({ status: "hidden" })}
      />
    );
  }

  return (
    <span
      className="flex items-center gap-1.5 text-[11px] text-muted/80"
      title="오늘 방문자 수 · 누적 방문자 수"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5 text-accent"
        aria-hidden="true"
      >
        <path
          d="M2.5 12S6 5.5 12 5.5S21.5 12 21.5 12S18 18.5 12 18.5S2.5 12 2.5 12z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.8" />
      </svg>
      <span>
        오늘{" "}
        <b className="font-bold text-accent">
          {state.today.toLocaleString("ko-KR")}
        </b>
      </span>
      <span className="text-muted/40">·</span>
      <span>
        누적{" "}
        <b className="font-bold text-accent">
          {state.total.toLocaleString("ko-KR")}
        </b>
      </span>
    </span>
  );
}
