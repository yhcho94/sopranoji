"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function checkStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as { standalone?: boolean }).standalone === true
  );
}

function checkIOS() {
  if (typeof window === "undefined") return false;
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

export default function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone] = useState(checkStandalone);
  const [isIOS] = useState(checkIOS);
  const [showHint, setShowHint] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (isStandalone) return null;

  const handleClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      if (outcome === "accepted") setJustInstalled(true);
      return;
    }
    setShowHint((v) => !v);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 6v8" strokeLinecap="round" />
          <path d="M9 11l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 18h6" strokeLinecap="round" />
        </svg>
        <span>홈 화면에 추가</span>
      </button>

      {justInstalled && (
        <div className="mt-3 max-w-xs rounded-xl border border-line bg-background-elevated p-4 text-center text-xs leading-6 text-muted">
          설치가 완료되었어요! 홈 화면에 아이콘이 바로 보이지 않으면, 폰의
          앱 목록(서랍)에서 &lsquo;지정윤&rsquo;을 찾아 길게 누른 뒤
          &lsquo;홈 화면에 추가&rsquo;를 선택해 주세요.
        </div>
      )}

      {showHint && (
        <div className="mt-3 max-w-xs rounded-xl border border-line bg-background-elevated p-4 text-center text-xs leading-6 text-muted">
          {isIOS ? (
            <>
              Safari 하단의 공유 버튼{" "}
              <span className="text-accent">(⬆︎)</span>을 누른 뒤
              &lsquo;홈 화면에 추가&rsquo;를 선택해 주세요.
            </>
          ) : (
            <>
              브라우저 메뉴(⋮)에서 &lsquo;홈 화면에 추가&rsquo; 또는
              &lsquo;앱 설치&rsquo;를 선택해 주세요.
              <br />
              <br />
              이미 설치하신 적이 있다면 자동 설치 창이 다시 뜨지 않을 수
              있어요. 홈 화면의 아이콘을 삭제하시고, 브라우저 메뉴(⋮) →
              설정 → 앱에서 기존 앱을 완전히 제거한 뒤 페이지를 새로고침하면
              다시 설치할 수 있어요.
            </>
          )}
        </div>
      )}
    </div>
  );
}
