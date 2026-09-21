import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "인문학 강사 | 소프라노 지정윤",
};

export default function HumanitiesLecturePage() {
  return (
    <div>
      <PageHero eyebrow="HUMANITIES LECTURE" title="인문학 강사" alt="인문학 강사" />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            뮤지컬로 삶을 이야기하는 인문학 강사입니다.
          </p>
          <p>
            지정윤은 뮤지컬의 여러 작품 속에 담긴 이야기를 통해, 우리 삶에
            필요한 인문학적 교훈을 나누는 인문학 강사입니다. 무대 위 인물들이
            겪는 갈등과 성장의 서사 속에서, 우리의 삶을 돌아보고 함께
            생각해보는 시간을 만듭니다.
          </p>
          <p>
            경찰대학교에서 경찰대학생을 대상으로 두 차례 특강을 진행하는 등,
            다양한 자리에서 뮤지컬을 소재로 한 인문학 강의를 이어오고
            있습니다.
          </p>
          <p>
            음악과 이야기를 통해 즐겁고 의미 있는 인문학 특강을 전하고
            있으니, 강사 섭외가 필요하신 분은 컨택트 메뉴를 통해 문의해
            주세요. 재미있는 인문학 특강으로 찾아뵙겠습니다.
          </p>
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 대표 이미지는 추후 업데이트될 예정입니다.
        </p>
      </div>
    </div>
  );
}
