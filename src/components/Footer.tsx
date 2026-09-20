const INSTAGRAM_URL = "https://www.instagram.com/jjy1340";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <p className="font-display text-sm tracking-[0.3em] text-muted">
          SOPRANO JI JEONGYUN
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-wide text-accent hover:underline"
        >
          @jjy1340
        </a>
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} Ji Jeongyun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
