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

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            세종리틀싱어즈를 이끄는 지휘자, 아이들의 목소리로 무대를
            만듭니다.
          </p>
          <p>
            2023년 10월부터 세종리틀싱어즈의 단장이자 상임지휘자로, 세종드림
            예술기획 대표로서 어린이 합창 교육과 공연 기획을 함께 이끌고
            있습니다.
          </p>
          <p>
            앞서 세종 사계절하모니합창단 지휘자로 활동하던 2023년에는
            세계합창대회(World Choir Games)에서 실버 디플로마를 수상했습니다.
          </p>
          <p>
            지금은 세종리틀싱어즈와 함께 세종특별자치시장 취임식,
            세종한글축제, 정기연주회 등 크고 작은 무대에 꾸준히 오르고
            있습니다.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-background-elevated p-6">
          <p className="text-xs tracking-[0.25em] text-accent">
            세종리틀싱어즈
          </p>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
            단원 입단 문의와 공연 문의는 세종리틀싱어즈 홈페이지에서 하실 수
            있습니다.
          </p>
          <a
            href="https://sejonglittlesingers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
          >
            <span>세종리틀싱어즈 홈페이지</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M9 7h8v8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-10">
          <ImageGallery images={GALLERY} alt="지정윤 지휘 활동 사진" />
        </div>
      </div>
    </div>
  );
}
