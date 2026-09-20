const INSTAGRAM_URL = "https://www.instagram.com/jjy1340";
const YOUTUBE_URL = "https://youtube.com/channel/UCAKsSWLfvD0hgk-aLIKF2SQ";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <p className="font-display text-sm tracking-[0.3em] text-muted">
          SOPRANO JI JEONGYUN
        </p>
        <div className="flex items-center gap-4 text-xs tracking-wide">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Instagram
          </a>
          <span className="text-muted/40">·</span>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            YouTube
          </a>
        </div>
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} Ji Jeongyun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
