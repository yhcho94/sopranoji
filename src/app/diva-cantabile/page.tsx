import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "디바칸타빌레 | 소프라노 지정윤",
};

export default function DivaCantabilePage() {
  return (
    <div>
      <PageHero eyebrow="DIVA CANTABILE" title="디바칸타빌레" alt="디바칸타빌레" />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            노래하는 아름다움을 전하는 디바칸타빌레입니다.
          </p>
          <p>
            디바칸타빌레는 지정윤이 대표를 맡고 있는 음악 브랜드입니다.
            성악가로서 쌓아온 경험을 바탕으로 다양한 무대와 음악 활동을
            이어가고 있습니다.
          </p>
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 대표 이미지는 추후 업데이트될 예정입니다. 디바칸타빌레 관련
          추가 정보나 사진을 보내주시면 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
