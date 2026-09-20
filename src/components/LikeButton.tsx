"use client";

import { useEffect, useState } from "react";

const NAMESPACE = "sopranoji-vercel-app";
const KEY = "home-likes";
const STORAGE_KEY = "sopranoji-liked";

function readLiked() {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function LikeButton() {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(readLiked);

  useEffect(() => {
    fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
      .then((res) => res.json())
      .then((data) => setCount(typeof data.value === "number" ? data.value : 0))
      .catch(() => setCount(null));
  }, []);

  const toggleLike = async () => {
    const nextLiked = !liked;
    const amount = nextLiked ? 1 : -1;
    setLiked(nextLiked);
    setCount((c) => (c === null ? c : c + amount));
    try {
      localStorage.setItem(STORAGE_KEY, nextLiked ? "1" : "0");
    } catch {}

    try {
      const res = await fetch(
        `https://api.countapi.xyz/update/${NAMESPACE}/${KEY}?amount=${amount}`,
      );
      const data = await res.json();
      if (typeof data.value === "number") setCount(data.value);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-label={liked ? "좋아요 취소" : "좋아요"}
      className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
    >
      <span className="text-base" aria-hidden="true">
        {liked ? "❤️" : "🤍"}
      </span>
      <span>좋아요{count !== null ? ` ${count.toLocaleString()}` : ""}</span>
    </button>
  );
}
