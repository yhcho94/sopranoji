import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VideoGallery from "@/components/VideoGallery";

export const metadata: Metadata = {
  title: "싱투게더콰이어 | 소프라노 지정윤",
};

const VIDEOS = [
  { id: "sfuFVjg0ecs", title: "특별 무대 〈부모의 노래〉" },
];

export default function SingTogetherPage() {
  return (
    <div>
      <PageHero
        src="/images/sing-together-hero.jpg"
        alt="싱투게더콰이어 공연 무대"
        eyebrow="SING TOGETHER CHOIR"
        title="싱투게더콰이어"
        imagePosition="object-center"
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

        <div className="mt-12">
          <h2 className="text-xs tracking-[0.25em] text-accent">STAGE</h2>
          <p className="mt-3 text-base font-bold text-foreground sm:text-lg">
            특별 무대 〈부모의 노래〉
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              세종 싱투게더 합창단이 세종리틀싱어즈 정기연주회에서 선보인
              특별 무대 〈부모의 노래〉입니다. 싱투게더 합창단 부모님들이
              자녀들에게 직접 전하는 마음을 담아 무대에 올랐습니다.
            </p>
            <p>
              공연은 세종문화예술회관에서 진행되었으며, 부모와 자녀가 함께
              만들어가는 가족 합창의 의미를 깊이 담은 순간이었습니다.
            </p>
          </div>

          <div className="mt-6">
            <VideoGallery videos={VIDEOS} />
          </div>
        </div>

      </div>
    </div>
  );
}
