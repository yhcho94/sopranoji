import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { performances } from "@/data/performances";

export const metadata: Metadata = {
  title: "성악가 | 소프라노 지정윤",
};

export default function VocalistPage() {
  return (
    <div>
      <PageHero
        src="/images/profile-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="VOCALIST"
        title="성악가"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p>
            소프라노 지정윤은 숙명여자대학교 대학원에서 성악학 석사를 마치고,
            이탈리아 페스카레제 시립음악원에서 최고연주자과정과 &lsquo;Canto
            Spagnole&rsquo; 과정을 수료했습니다.
          </p>
          <p>
            팝페라 그룹 &lsquo;칼라스&rsquo;의 멤버로 다수의 뮤지컬
            갈라콘서트에 출연했고, 스위스 취리히와 이탈리아 줄리아넬로 초청
            연주 등 국내외 무대에서 활동해 왔습니다. 클래식 쇼콰이어
            &lsquo;튀김소보체&rsquo;의 멤버로도 활동하고 있습니다.
          </p>
        </div>

        <div className="mt-14">
          <p className="text-xs tracking-[0.4em] text-accent">RECITALS</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">독창회 · 공연 이력</h2>
        </div>

        <div className="mt-8 space-y-6">
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
              <h3 className="mt-4 font-display text-xl leading-snug text-foreground">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 네이버 인물정보(본인/대리인 관리) 및 공개된 자료를 바탕으로
          정리했습니다. 추가 공연 정보를 보내주시면 목록에 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
