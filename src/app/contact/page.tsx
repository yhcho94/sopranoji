import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "컨택트 | 소프라노 지정윤",
};

const EMAIL = "jjyy1340@naver.com";
const PHONE = "01092942612";
const INSTAGRAM_URL = "https://www.instagram.com/jjy1340";
const YOUTUBE_URL = "https://youtube.com/channel/UCAKsSWLfvD0hgk-aLIKF2SQ";
const FACEBOOK_URL = "https://www.facebook.com/share/1AsFo2t6jG/";
const NAVER_URL = "https://naver.me/5LQZ7evZ";
const NAVER_BLOG_URL = "https://blog.naver.com/jjyy1340";

function ContactIcon({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      className="group flex flex-col items-center gap-2"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors group-hover:bg-accent-soft">
        {children}
      </span>
      <span className="text-xs tracking-wide text-muted group-hover:text-foreground">
        {label}
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div>
      <PageHero
        src="/images/contact-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="CONTACT"
        title="컨택트"
      />

      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-base leading-7 text-foreground sm:text-lg">
          공연, 협업, 세종리틀싱어즈 문의 모두 반갑습니다. 아래 채널로 편하게
          연락해 주세요.
        </p>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-8">
          <ContactIcon href={`mailto:${EMAIL}`} label="이메일">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path
                d="M4 7l8 6 8-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ContactIcon>

          <ContactIcon href={`tel:${PHONE}`} label="전화" external={false}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M7 4c-1.1 0-2 .9-2 2 0 7.2 5.8 13 13 13 1.1 0 2-.9 2-2v-1.8a1 1 0 00-.8-1l-2.7-.6a1 1 0 00-1 .3l-.9.9a10.6 10.6 0 01-4.4-4.4l.9-.9a1 1 0 00.3-1L10.8 6a1 1 0 00-1-.8H7z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ContactIcon>

          <ContactIcon href={INSTAGRAM_URL} label="Instagram">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.2"
                cy="6.8"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </ContactIcon>

          <ContactIcon href={YOUTUBE_URL} label="YouTube">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7z" />
              <path d="M10 9.5v5l4.5-2.5z" fill="var(--background)" />
            </svg>
          </ContactIcon>

          <ContactIcon href={FACEBOOK_URL} label="Facebook">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path
                d="M14 8.5h-1.5A1.5 1.5 0 0011 10v1.5h3l-.4 2.5H11V19"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9.2 13.5H14" strokeLinecap="round" />
            </svg>
          </ContactIcon>
        </div>

        <p className="mt-10 text-sm text-muted">{EMAIL}</p>

        <div className="mt-6 flex flex-col items-center gap-2">
          <a
            href={NAVER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-accent hover:underline"
          >
            네이버 인물정보 보기 →
          </a>
          <a
            href={NAVER_BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-accent hover:underline"
          >
            네이버 블로그 보기 →
          </a>
        </div>
      </div>
    </div>
  );
}
