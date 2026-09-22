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
  { href: "/contact", label: "컨택트" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

        <nav className="hidden gap-8 md:flex">
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
