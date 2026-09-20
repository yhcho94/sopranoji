const INSTAGRAM_URL = "https://www.instagram.com/jjy1340";
const YOUTUBE_URL = "https://youtube.com/channel/UCAKsSWLfvD0hgk-aLIKF2SQ";

export default function SocialFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background/90 text-accent shadow-lg backdrop-blur-md transition-colors hover:bg-accent-soft"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background/90 text-accent shadow-lg backdrop-blur-md transition-colors hover:bg-accent-soft"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7z" />
          <path d="M10 9.5v5l4.5-2.5z" fill="var(--background)" />
        </svg>
      </a>
    </div>
  );
}
