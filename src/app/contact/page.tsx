import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "컨택트 | 소프라노 지정윤",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-xs tracking-[0.4em] text-accent">CONTACT</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">컨택트</h1>
      <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
        공연, 협업, 세종리틀싱어즈 관련 문의는 아래 채널로 연락해 주세요.
      </p>

      <div className="mt-12 flex flex-col items-center gap-4">
        <a
          href="https://www.instagram.com/jjy1340"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs rounded-full bg-foreground px-7 py-4 text-sm tracking-wide text-background transition-opacity hover:opacity-85"
        >
          Instagram @jjy1340
        </a>
      </div>

      <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
        ※ 이메일, 전화번호 등 추가 연락 채널을 알려주시면 이 페이지에
        반영하겠습니다.
      </p>
    </div>
  );
}
