import VisitorBadge from "./VisitorBadge";

const INSTAGRAM_URL = "https://www.instagram.com/jjy1340";
const YOUTUBE_URL = "https://youtube.com/channel/UCAKsSWLfvD0hgk-aLIKF2SQ";
const NAVER_URL = "https://naver.me/5LQZ7evZ";
const FACEBOOK_URL = "https://www.facebook.com/share/1AsFo2t6jG/";
const EMAIL = "jjyy1340@naver.com";
const PHONE = "01092942612";

function IconLink({
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
      className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors hover:bg-accent-soft"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/90 px-6 py-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center sm:justify-between">
        <span className="order-3 w-full text-[11px] text-muted/80 sm:order-1 sm:w-auto sm:text-left">
          © {new Date().getFullYear()} RyanDaddy. All rights reserved.
        </span>

        <div className="order-1 flex items-center gap-3 sm:order-2">
          <IconLink href={INSTAGRAM_URL} label="Instagram">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
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
          </IconLink>

          <IconLink href={YOUTUBE_URL} label="YouTube">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7z" />
              <path d="M10 9.5v5l4.5-2.5z" fill="var(--background)" />
            </svg>
          </IconLink>

          <IconLink href={NAVER_URL} label="Naver">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path
                d="M9 8v8l6-8v8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconLink>

          <IconLink href={FACEBOOK_URL} label="Facebook">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
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
          </IconLink>

          <IconLink href={`mailto:${EMAIL}`} label="Email" external={false}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path
                d="M4 7l8 6 8-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconLink>

          <IconLink href={`tel:${PHONE}`} label="전화" external={false}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M7 4c-1.1 0-2 .9-2 2 0 7.2 5.8 13 13 13 1.1 0 2-.9 2-2v-1.8a1 1 0 00-.8-1l-2.7-.6a1 1 0 00-1 .3l-.9.9a10.6 10.6 0 01-4.4-4.4l.9-.9a1 1 0 00.3-1L10.8 6a1 1 0 00-1-.8H7z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconLink>
        </div>

        <div className="order-2 sm:order-3">
          <VisitorBadge />
        </div>
      </div>
    </footer>
  );
}
