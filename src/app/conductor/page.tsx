import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "지휘자 | 소프라노 지정윤",
};

const GALLERY = Array.from({ length: 9 }, (_, i) => ({
  id: `conductor-gallery-${i + 1}`,
  src: `/images/conductor-gallery/${i + 1}.jpg`,
}));

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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line"
            >
              <Image
                src={item.src}
                alt="지정윤 지휘 활동 사진"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
