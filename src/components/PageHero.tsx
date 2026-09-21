import Image from "next/image";

export default function PageHero({
  src,
  alt,
  eyebrow,
  title,
  imagePosition = "object-top",
}: {
  src?: string;
  alt: string;
  eyebrow: string;
  title: string;
  imagePosition?: string;
}) {
  return (
    <div>
      {src && (
        <div className="relative h-[34vh] min-h-[260px] w-full overflow-hidden border-b border-line sm:h-[46vh]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className={`object-cover ${imagePosition}`}
          />
        </div>
      )}
      <div className="bg-background px-6 pt-8 pb-4 text-center">
        <p className="text-xs tracking-[0.4em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h1>
      </div>
    </div>
  );
}
