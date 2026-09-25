import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "인문학 강사 | 소프라노 지정윤",
};

export default function HumanitiesLecturePage() {
  return (
    <div>
      <PageHero
        src="/images/humanities-lecture-hero.jpg"
        alt="경찰대학교 뮤지컬 인문학 특강 중인 소프라노 지정윤"
        eyebrow="HUMANITIES LECTURE"
        title="인문학 강사"
      />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            뮤지컬로 삶을 이야기하는 인문학 강사입니다.
          </p>
          <p>
            뮤지컬 속 인물들이 겪는 갈등과 성장의 이야기를 통해, 우리 삶에
            필요한 인문학적 교훈을 나눕니다. 경찰대학교에서 두 차례 특강을
            진행하는 등 다양한 자리에서 강의를 이어오고 있습니다.
          </p>
          <p>
            강사 섭외가 필요하신 분은 컨택트 메뉴로 문의해 주세요. 재미있는
            인문학 특강으로 찾아뵙겠습니다.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-background-elevated p-6">
          <p className="text-xs tracking-widest text-accent">강의 이력</p>
          <p className="mt-4 text-sm text-muted">
            2020. 6월 · 경찰대학교
          </p>
          <p className="mt-1 text-base font-bold text-foreground sm:text-lg">
            뮤지컬을 통해 인생을 만나다 — 오페라의 유령과 함께
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            경찰대학교 3학년 학생들을 대상으로 뮤지컬 작품을 소개하고, 주요
            스토리를 통해 인문학적 교훈을 전했습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
