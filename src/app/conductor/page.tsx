import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "지휘자 | 소프라노 지정윤",
};

const GALLERY = [
  { src: "/images/conductor-gallery/1.jpg", width: 1440, height: 960 },
  { src: "/images/conductor-gallery/2.jpg", width: 1440, height: 960 },
  { src: "/images/conductor-gallery/3.jpg", width: 1440, height: 1080 },
  { src: "/images/conductor-gallery/4.jpg", width: 1440, height: 1080 },
  { src: "/images/conductor-gallery/5.jpg", width: 1440, height: 960 },
  { src: "/images/conductor-gallery/6.jpg", width: 1440, height: 845 },
  { src: "/images/conductor-gallery/7.jpg", width: 1440, height: 960 },
  { src: "/images/conductor-gallery/8.jpg", width: 1372, height: 840 },
  { src: "/images/conductor-gallery/9.jpg", width: 1440, height: 1080 },
];

export default function ConductorPage() {
  return (
    <div>
      <PageHero
        src="/images/conductor-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="CONDUCTOR"
        title="지휘자"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p>
            지정윤은 2023년 10월부터 세종리틀싱어즈의 단장이자 지휘자로서,
            아이들의 목소리로 무대를 만들어가고 있습니다. 세종드림예술기획
            대표로서 어린이 합창 교육과 공연 기획을 함께 이끌며, 세종을
            대표하는 어린이 합창 문화를 만드는 데 앞장서고 있습니다.
          </p>
          <p>
            세종 사계절하모니합창단 지휘자로 활동하던 2023년에는
            세계합창대회(World Choir Games)에 출전해 실버 디플로마(Silver
            Diploma)를 수상했고, 같은 해 세종 음악인상을 수상하며 지휘자로서의
            역량을 인정받았습니다.
          </p>
          <p>
            이에 앞서 계룡시 뮤지컬 어린이합창단의 지휘자를 역임했고,
            육·해·공군 3군본부 군악대 객원 지휘를 맡는 등 여러 무대에서 지휘
            경험을 쌓아왔습니다. 세종리틀싱어즈를 맡은 이후에는
            세종특별자치시장 취임식, 세종한글축제, 정기연주회 등 크고 작은
            무대에 꾸준히 올라 아이들과 함께 완성도 높은 공연을 선보이고
            있습니다.
          </p>
        </div>

        <div className="mt-10">
          <ImageGallery
            images={GALLERY}
            alt="지정윤 지휘 활동 사진"
            layout="flow"
          />
        </div>
      </div>
    </div>
  );
}
