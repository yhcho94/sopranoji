"use client";

import { useState } from "react";
import type { Performance } from "@/data/performances";

function getYear(date: string) {
  return date.slice(0, 4);
}

export default function PastPerformances({ items }: { items: Performance[] }) {
  const [openYear, setOpenYear] = useState<string | null>(null);

  const byYear = new Map<string, Performance[]>();
  for (const item of items) {
    const year = getYear(item.date);
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(item);
  }
  const years = Array.from(byYear.keys());

  return (
    <div className="mt-10">
      <p className="text-xs tracking-[0.4em] text-accent">ARCHIVE</p>
      <h3 className="mt-3 font-display text-xl sm:text-2xl">과거 공연이력</h3>

      <div className="mt-6 space-y-3">
        {years.map((year) => {
          const yearItems = byYear.get(year)!;
          const open = openYear === year;
          return (
            <div
              key={year}
              className="overflow-hidden rounded-2xl border border-line bg-background-elevated"
            >
              <button
                type="button"
                onClick={() => setOpenYear(open ? null : year)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm text-foreground sm:text-base">
                  {year}년{" "}
                  <span className="text-muted">({yearItems.length}건)</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className={`h-4 w-4 text-accent transition-transform ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {open && (
                <div className="space-y-4 border-t border-line px-6 py-5">
                  {yearItems.map((item) => (
                    <div key={item.id}>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                        <span>{item.date}</span>
                        <span>·</span>
                        <span>{item.venue}</span>
                      </div>
                      <h4 className="mt-2 font-display text-base text-foreground sm:text-lg">
                        {item.title}
                      </h4>
                      {item.note && (
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
