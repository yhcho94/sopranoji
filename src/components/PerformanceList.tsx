"use client";

import { useState } from "react";
import type { Performance } from "@/data/performances";

const PREVIEW_COUNT = 6;

export default function PerformanceList({ items }: { items: Performance[] }) {
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;

  const visible = expanded ? items : items.slice(0, PREVIEW_COUNT);
  const hiddenCount = items.length - PREVIEW_COUNT;

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-line">
        <div className="divide-y divide-line">
          {visible.map((item) => (
            <div key={item.id} className="bg-background-elevated px-6 py-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                {item.upcoming && (
                  <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-accent">
                    예정
                  </span>
                )}
                <span>{item.date}</span>
                <span>·</span>
                <span>{item.venue}</span>
              </div>
              <h3 className="mt-1.5 text-sm font-bold leading-snug text-foreground sm:text-base">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-1.5 text-xs leading-6 text-muted sm:text-sm">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-xs tracking-wide text-accent transition-colors hover:bg-accent-soft"
        >
          {expanded ? "접기" : `공연 ${hiddenCount}건 더보기`}
        </button>
      )}
    </div>
  );
}
