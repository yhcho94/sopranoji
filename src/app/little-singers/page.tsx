import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "세종리틀싱어즈 | 소프라노 지정윤",
};

export default function LittleSingersPage() {
  return (
    <div>
      <PageHero eyebrow="LITTLE SINGERS" title="세종리틀싱어즈" alt="세종리틀싱어즈" />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            아이들의 맑은 목소리로 세종을 노래하는 어린이 합창단입니다.
          </p>
          <p>
            세종리틀싱어즈는 지정윤이 2023년 10월부터 단장 및 상임지휘자로
            이끌고 있는 세종의 어린이 합창단입니다. 순수하고 맑은 목소리로
            노래하며, 아이들이 무대 위에서 자신감과 협동심을 키워나갈 수
            있도록 함께하고 있습니다.
          </p>
          <p>
            정기연주회와 기획연주회를 비롯해 세종특별자치시장 취임식,
            세종한글축제, 세종시민체육대회 등 지역의 크고 작은 무대에 꾸준히
            올라 어린이 합창의 매력을 전하고 있습니다.
          </p>
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 대표 이미지는 추후 업데이트될 예정입니다. 세종리틀싱어즈 관련
          추가 정보나 사진을 보내주시면 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
