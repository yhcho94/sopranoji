"use client";

import { useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

type Group =
  | { type: "landscape"; img: GalleryImage; index: number }
  | { type: "portraits"; items: { img: GalleryImage; index: number }[] };

function groupForFlow(images: GalleryImage[]): Group[] {
  const groups: Group[] = [];
  let buffer: { img: GalleryImage; index: number }[] = [];

  images.forEach((img, index) => {
    const isLandscape = img.width / img.height > 1.15;
    if (isLandscape) {
      if (buffer.length) {
        groups.push({ type: "portraits", items: buffer });
        buffer = [];
      }
      groups.push({ type: "landscape", img, index });
    } else {
      buffer.push({ img, index });
    }
  });

  if (buffer.length) groups.push({ type: "portraits", items: buffer });
  return groups;
}

function Thumb({
  img,
  alt,
  onClick,
}: {
  img: GalleryImage;
  alt: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="사진 크게 보기"
      style={{ aspectRatio: `${img.width} / ${img.height}` }}
      className="relative w-full overflow-hidden rounded-xl border border-line transition-opacity hover:opacity-90"
    >
      <Image src={img.src} alt={alt} fill className="object-cover" />
    </button>
  );
}

export default function ImageGallery({
  images,
  alt,
  layout = "grid",
}: {
  images: GalleryImage[];
  alt: string;
  layout?: "grid" | "flow";
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      {layout === "flow" ? (
        <div className="space-y-3">
          {groupForFlow(images).map((group, gi) =>
            group.type === "landscape" ? (
              <Thumb
                key={group.img.src}
                img={group.img}
                alt={alt}
                onClick={() => setSelected(group.index)}
              />
            ) : (
              <div key={gi} className="grid grid-cols-2 gap-3">
                {group.items.map(({ img, index }, itemIndex) => {
                  const isLastOdd =
                    group.items.length % 2 === 1 &&
                    itemIndex === group.items.length - 1;
                  return (
                    <div
                      key={img.src}
                      className={isLastOdd ? "col-span-2" : undefined}
                    >
                      <Thumb
                        img={img}
                        alt={alt}
                        onClick={() => setSelected(index)}
                      />
                    </div>
                  );
                })}
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((img, i) => (
            <Thumb
              key={img.src}
              img={img}
              alt={alt}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
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
