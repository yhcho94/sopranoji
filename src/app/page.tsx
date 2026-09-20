import Image from "next/image";
import Link from "next/link";
import { performances } from "@/data/performances";

export default function Home() {
  const latestPerformances = performances.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-line">
        <Image
          src="/images/profile-hero.jpg"
          alt="소프라노 지정윤"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center animate-fade-up">
          <p className="mb-5 text-xs tracking-[0.5em] text-accent">
            SOPRANO · CONDUCTOR
          </p>
          <h1 className="font-display text-5xl leading-tight tracking-tight sm:text-7xl">
            <span className="text-gradient-gold">지정윤</span>
          </h1>
          <p className="mt-4 font-display text-base tracking-[0.35em] text-muted sm:text-lg">
            JI JOUNGYUN
          </p>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-muted sm:text-base">
            소프라노이자 세종리틀싱어즈 지휘자 · 단장.
            <br />
            무대 위의 노래와 아이들과 함께하는 무대 아래의 노래, 그 사이를 잇습니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/performances"
              className="rounded-full border border-accent px-7 py-3 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
            >
              공연 보기
            </Link>
            <a
              href="https://www.instagram.com/jjy1340"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-7 py-3 text-sm tracking-wide text-background transition-opacity hover:opacity-85"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs tracking-[0.4em] text-accent">ABOUT</p>
        <h2 className="mt-4 font-display text-2xl sm:text-3xl">
          노래로 위로하고, 지휘로 함께 만듭니다
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
          소프라노 지정윤은 이탈리아 유학을 통해 성악을 배우고, 무대와 병원,
          지역사회를 넘나들며 노래를 나눠온 음악가입니다. 현재는 세종리틀싱어즈의
          지휘자이자 단장으로 어린이들과 함께 무대를 만들어가고 있습니다.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block text-sm tracking-wide text-accent hover:underline"
        >
          자세히 보기 →
        </Link>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <div className="section-divider" />
      </div>

      {/* Performances preview */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.4em] text-accent">PERFORMANCES</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">공연</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {latestPerformances.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-line bg-background-elevated p-6"
            >
              <div className="flex items-center justify-between text-xs text-muted">
                <span>{item.venue}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg leading-snug text-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/performances"
            className="text-sm tracking-wide text-accent hover:underline"
          >
            공연 전체 보기 →
          </Link>
        </div>
      </section>
    </div>
  );
}
