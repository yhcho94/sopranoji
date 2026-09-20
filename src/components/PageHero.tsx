import Image from "next/image";

export default function PageHero({
  src,
  alt,
  eyebrow,
  title,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="relative h-[30vh] min-h-[220px] w-full overflow-hidden border-b border-line sm:h-[38vh]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
      <div className="relative flex h-full flex-col items-center justify-end pb-8 text-center">
        <p className="text-xs tracking-[0.4em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h1>
      </div>
    </div>
  );
}
