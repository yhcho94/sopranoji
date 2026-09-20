import VisitorBadge from "./VisitorBadge";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/90 px-6 py-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center sm:justify-between">
        <span className="text-[11px] text-muted/80">
          © {new Date().getFullYear()} Ji Joungyun. All rights reserved.
        </span>
        <VisitorBadge />
      </div>
    </footer>
  );
}
