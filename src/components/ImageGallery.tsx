"use client";

import { useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

const PREVIEW_COUNT = 6;

export default function ImageGallery({
  images,
  alt,
}: {
  images: GalleryImage[];
  alt: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? images : images.slice(0, PREVIEW_COUNT);
  const hiddenCount = images.length - PREVIEW_COUNT;

  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setSelected(i)}
            aria-label="사진 크게 보기"
            className="relative aspect-square w-full overflow-hidden rounded-xl border border-line transition-opacity hover:opacity-90"
          >
            <Image
              src={img.src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 33vw, 240px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-xs tracking-wide text-accent transition-colors hover:bg-accent-soft"
        >
          {expanded ? "사진 접기" : `사진 ${hiddenCount}장 더보기`}
        </button>
      )}

      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="닫기"
            onClick={() => setSelected(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative h-full max-h-[85vh] w-full max-w-3xl">
            <Image
              src={images[selected].src}
              alt={alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
