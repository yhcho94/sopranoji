import Image from "next/image";
import Link from "next/link";
import ReactionButton from "@/components/ReactionButton";
import InstallAppButton from "@/components/InstallAppButton";

const MENU = [
  {
    href: "/about",
    label: "소개",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/vocalist",
    label: "성악가",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M6 11a6 6 0 0012 0" strokeLinecap="round" />
        <path d="M12 17v4" strokeLinecap="round" />
        <path d="M9 21h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/conductor",
    label: "지휘자(세종리틀싱어즈)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <path d="M6 18L17 7" strokeLinecap="round" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/humanities-lecture",
    label: "인문학 강사",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <path d="M12 6c-1.8-1.3-4-2-6-2v13c2 0 4.2.7 6 2 1.8-1.3 4-2 6-2V4c-2 0-4.2.7-6 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v13" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/soborche",
    label: "튀김소보체",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" strokeLinecap="round" />
        <path d="M13.5 20c.3-2.2 1.8-4 3.8-4.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/diva-cantabile",
    label: "디바칸타빌레",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <path d="M12 19c4-1 6-4.5 6-8V6l-6 2-6-2v5c0 3.5 2 7 6 8z" strokeLinejoin="round" />
        <path d="M12 12v-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/sing-together",
    label: "싱투게더콰이어",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        <path d="M16 5.5a3 3 0 010 5.6" strokeLinecap="round" />
        <path d="M17.5 14.6c2 .8 3.5 2.7 3.5 5.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/press",
    label: "보도자료",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <rect x="3" y="5" width="14" height="14" rx="1" />
        <path d="M7 9h6M7 12h6M7 15h4" strokeLinecap="round" />
        <path d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "컨택트(섭외)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line lg:border-b-0">
        <div className="relative h-[30vh] min-h-[220px] w-full overflow-hidden sm:h-[46vh] lg:mx-auto lg:mt-8 lg:h-auto lg:max-w-5xl lg:aspect-[16/9] lg:rounded-2xl lg:border">
          <Image
            src="/images/profile-hero.jpg"
            alt="소프라노 지정윤"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-5 text-center animate-fade-up sm:py-8">
          <p className="mb-3 text-xs tracking-[0.5em] text-accent">
            SOPRANO · CONDUCTOR
          </p>
          <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient-gold">지정윤</span>
          </h1>
          <p className="mt-3 font-display text-sm tracking-[0.35em] text-muted sm:text-lg">
            JI JOUNGYUN
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:leading-8 sm:text-base">
            무대 위에서는 노래로 위로를 전하고, 무대 아래에서는 아이들과
            함께 노래하며 자라나는 목소리를 지휘합니다.
            <br />
            성악가 지정윤은 클래식과 대중의 경계를 넘나들며, 노래로 사람과
            사람을 잇는 음악가입니다.
          </p>
        </div>
      </section>

      {/* Menu grid */}
      <section className="mx-auto max-w-4xl px-6 pt-2 pb-10 sm:pt-6">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-1.5 rounded-2xl border border-line bg-background-elevated px-2 py-4 text-center transition-colors hover:border-accent/50 sm:gap-2.5 sm:px-4 sm:py-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors group-hover:bg-accent-soft sm:h-11 sm:w-11">
                {item.icon}
              </span>
              <span className="text-xs tracking-wide text-foreground sm:text-sm">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ReactionButton
            storageKey="home-likes"
            emoji="❤️"
            label="좋아요"
            colorClass="border-accent/40 text-accent hover:bg-accent-soft"
          />
          <ReactionButton
            storageKey="home-fighting"
            emoji="💪"
            label="화이팅"
            colorClass="border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <InstallAppButton />
        </div>
      </section>
    </div>
  );
}
