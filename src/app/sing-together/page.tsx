import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "싱투게더콰이어 | 소프라노 지정윤",
};

export default function SingTogetherPage() {
  return (
    <div>
      <PageHero
        eyebrow="SING TOGETHER CHOIR"
        title="싱투게더콰이어"
        alt="싱투게더콰이어"
      />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            노래로 함께 어울리는 합창단, 싱투게더콰이어의 지휘자로
            함께합니다.
          </p>
          <p>
            지정윤은 싱투게더콰이어의 지휘자로 활동하고 있습니다. 노래를
            사랑하는 사람들이 모여 서로의 목소리를 맞추고, 무대 위에서 하나의
            하모니를 만들어가고 있습니다.
          </p>
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 대표 이미지는 추후 업데이트될 예정입니다. 싱투게더콰이어 관련
          추가 정보나 사진을 보내주시면 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
