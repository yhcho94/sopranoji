const EMAIL = "jjyy1340@naver.com";
const PHONE = "01092942612";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-28 right-4 z-40 flex flex-col gap-3 sm:bottom-20 sm:right-6">
      <a
        href={`tel:${PHONE}`}
        aria-label="전화 문의"
        title="전화 문의"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B4BA8] text-white shadow-lg shadow-black/50 transition-transform hover:scale-105 sm:h-13 sm:w-13"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M7 4c-1.1 0-2 .9-2 2 0 7.2 5.8 13 13 13 1.1 0 2-.9 2-2v-1.8a1 1 0 00-.8-1l-2.7-.6a1 1 0 00-1 .3l-.9.9a10.6 10.6 0 01-4.4-4.4l.9-.9a1 1 0 00.3-1L10.8 6a1 1 0 00-1-.8H7z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href={`mailto:${EMAIL}`}
        aria-label="이메일 문의"
        title="이메일 문의"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6B4BA8]/70 bg-background-elevated text-[#C0A6E8] shadow-lg shadow-black/50 transition-colors hover:bg-[#6B4BA8]/20 sm:h-13 sm:w-13"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
