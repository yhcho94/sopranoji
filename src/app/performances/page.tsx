import type { Metadata } from "next";
import { performances } from "@/data/performances";

export const metadata: Metadata = {
  title: "공연 | 소프라노 지정윤",
};

export default function PerformancesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-[0.4em] text-accent">PERFORMANCES</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">공연</h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        소프라노 지정윤의 독창회와 공연 이력입니다.
      </p>

      <div className="mt-12 space-y-6">
        {performances.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-line bg-background-elevated p-7"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              {item.upcoming && (
                <span className="rounded-full border border-accent/40 px-3 py-1 text-accent">
                  예정
                </span>
              )}
              <span>{item.date}</span>
              <span>·</span>
              <span>{item.venue}</span>
            </div>
            <h2 className="mt-4 font-display text-xl leading-snug text-foreground">
              {item.title}
            </h2>
            {item.note && (
              <p className="mt-3 text-sm leading-7 text-muted">{item.note}</p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
        ※ 네이버 인물정보(본인/대리인 관리) 및 공개된 자료를 바탕으로
        정리했습니다. 추가 공연 정보를 보내주시면 목록에 반영하겠습니다.
      </p>
    </div>
  );
}
