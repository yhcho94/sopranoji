"use client";

import { useRef, useState } from "react";

const AUDIO_SRC = "/audio/bgm.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
    setPlaying((v) => !v);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "배경음악 정지" : "배경음악 재생"}
        className="fixed bottom-16 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background/90 text-accent shadow-lg backdrop-blur-md transition-colors hover:bg-accent-soft"
      >
        {playing ? (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M9 18V5l11-2v13" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="17.5" cy="16" r="2.5" />
          </svg>
        )}
      </button>
    </>
  );
}
