import VisitorBadge from "./VisitorBadge";

const INSTAGRAM_URL = "https://www.instagram.com/jjy1340";
const YOUTUBE_URL = "https://youtube.com/channel/UCAKsSWLfvD0hgk-aLIKF2SQ";
const NAVER_URL = "https://naver.me/5LQZ7evZ";

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        </div>

        <div className="order-2 sm:order-3">
          <VisitorBadge />
        </div>
      </div>
    </footer>
  );
}
