"use client";

import { useEffect, useState } from "react";

const NAMESPACE = "sopranoji-vercel-app";
const KEY = "home-likes";

export default function LikeButton() {
  const [count, setCount] = useState<number | null>(null);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    fetch(`https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`)
      .then((res) => res.json())
      .then((data) => setCount(typeof data.value === "number" ? data.value : 0))
      .catch(() => setCount(0));
  }, []);

  const handleLike = async () => {
    setCount((c) => (c === null ? 1 : c + 1));
    setPulsing(true);
    setTimeout(() => setPulsing(false), 300);

    try {
      const res = await fetch(
        `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`,
      );
      const data = await res.json();
      if (typeof data.value === "number") setCount(data.value);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      aria-label="좋아요"
      className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
    >
      <span
        className={`text-base transition-transform ${pulsing ? "scale-125" : "scale-100"}`}
        aria-hidden="true"
      >
        ❤️
      </span>
      <span>좋아요{count !== null ? ` ${count.toLocaleString()}` : ""}</span>
    </button>
  );
}
