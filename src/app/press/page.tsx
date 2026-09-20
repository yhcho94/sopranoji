import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { pressItems } from "@/data/press";

export const metadata: Metadata = {
  title: "보도자료 | 소프라노 지정윤",
};

export default function PressPage() {
  return (
    <div>
      <PageHero
        src="/images/press-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="PRESS"
        title="보도자료"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-base font-bold leading-7 text-foreground sm:text-lg">
          지정윤의 무대와 활동을 전한 언론의 기록들을 모았습니다.
        </p>

        {pressItems.length === 0 && (
          <p className="mt-12 rounded-2xl border border-dashed border-line bg-background-elevated p-8 text-center text-sm leading-7 text-muted">
            아직 등록된 보도자료가 없습니다. 곧 소식을 전해드릴게요.
          </p>
        )}

        <div className="mt-12 space-y-6">
          {pressItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-line bg-background-elevated p-7 transition-colors hover:border-accent/50"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                <span className="rounded-full border border-accent/40 px-3 py-1 text-accent">
                  {item.tag}
                </span>
                <span>{item.outlet}</span>
                <span>·</span>
                <span>{item.date}</span>
              </div>
              <h2 className="mt-4 font-display text-xl leading-snug text-foreground group-hover:text-accent">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {item.excerpt}
              </p>
              <span className="mt-4 inline-block text-xs tracking-wide text-accent">
                원문 기사 보기 →
              </span>
            </a>
          ))}
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 웹 검색으로 확인된 보도만 수록했습니다. 추가 보도자료(원문 링크)를
          보내주시면 목록에 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
