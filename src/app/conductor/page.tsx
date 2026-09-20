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
        <p className="text-sm leading-8 text-muted sm:text-base">
          아이들과 함께 만든 무대, 그 순간들의 기록입니다.
        </p>

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
