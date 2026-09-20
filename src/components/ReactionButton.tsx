"use client";

import { useEffect, useState } from "react";

const NAMESPACE = "sopranoji-vercel-app";

export default function ReactionButton({
  storageKey,
  emoji,
  label,
  colorClass,
}: {
  storageKey: string;
  emoji: string;
  label: string;
  colorClass: string;
}) {
  const [count, setCount] = useState<number | null>(null);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    fetch(`https://abacus.jasoncameron.dev/get/${NAMESPACE}/${storageKey}`)
      .then((res) => res.json())
      .then((data) => setCount(typeof data.value === "number" ? data.value : 0))
      .catch(() => setCount(0));
  }, [storageKey]);

  const handleClick = async () => {
    setCount((c) => (c === null ? 1 : c + 1));
    setPulsing(true);
    setTimeout(() => setPulsing(false), 300);

    try {
      const res = await fetch(
        `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${storageKey}`,
      );
      const data = await res.json();
      if (typeof data.value === "number") setCount(data.value);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm tracking-wide transition-colors ${colorClass}`}
    >
      <span
        className={`text-base transition-transform ${pulsing ? "scale-125" : "scale-100"}`}
        aria-hidden="true"
      >
        {emoji}
      </span>
      <span>
        {label}
        {count !== null ? ` ${count.toLocaleString()}` : ""}
      </span>
    </button>
  );
}
