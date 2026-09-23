"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "소개" },
  { href: "/vocalist", label: "성악가" },
  { href: "/conductor", label: "지휘자(세종리틀싱어즈)" },
  { href: "/humanities-lecture", label: "인문학 강사" },
  { href: "/soborche", label: "튀김소보체" },
  { href: "/diva-cantabile", label: "디바칸타빌레" },
  { href: "/sing-together", label: "싱투게더콰이어" },
  { href: "/press", label: "보도자료" },
  { href: "/contact", label: "컨택트(섭외)" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 권한이 거부된 경우 조용히 무시한다
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-widest text-foreground"
          onClick={() => setOpen(false)}
        >
          SOPRANO <span className="text-gradient-gold">JI JOUNGYUN</span>
        </Link>

        <nav className="hidden gap-5 md:flex lg:gap-7">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 pl-3">
          <button
            type="button"
            onClick={handleCopyUrl}
            aria-label="홈페이지 주소 복사"
            title="홈페이지 주소 복사"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors hover:bg-accent-soft"
          >
            {copied ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path
                  d="M15 5.5A2.5 2.5 0 0012.5 4H6a2 2 0 00-2 2v6.5A2.5 2.5 0 006.5 15"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <button
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm tracking-wide text-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
