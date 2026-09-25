import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import VideoGallery from "@/components/VideoGallery";

export const metadata: Metadata = {
  title: "튀김소보체 | 소프라노 지정윤",
  description:
    "튀김소보체 2nd 앨범 발매기념 콘서트 〈Taste of Classic〉 2026년 10월 24일(토) 오후 7시 대전예술의전당 아트홀.",
};

// 가나다순
const MEMBERS = [
  "강승규",
  "김태형",
  "박새나",
  "신주형",
  "임찬양",
  "전용현",
  "정원석",
  "지정윤",
];

const ALBUMS: {
  order: string;
  title: string;
  releasedAt: string;
  tracks: string;
  melonUrl: string;
}[] = [
  {
    order: "2nd",
    title: "CLASSIC RE:BORN",
    releasedAt: "2026. 08. 27",
    tracks: "오늘을 위한 건배, 라크리모사",
    melonUrl: "https://www.melon.com/album/detail.htm?albumId=14487834",
  },
  {
    order: "1st",
    title: "Flying Fry",
    releasedAt: "2024. 10. 25",
    tracks: "Flying Fry, Wake up",
    melonUrl: "https://www.melon.com/album/detail.htm?albumId=11625370",
  },
];

const CONCERT_INFO: { label: string; value: string }[] = [
  { label: "일시", value: "2026년 10월 24일(토) 오후 7시 · 1일 1회" },
  { label: "장소", value: "대전예술의전당 아트홀" },
  { label: "티켓", value: "R석 5만원 / S석 3만원 / A석 2만원" },
  { label: "소요시간", value: "약 80분 (인터미션 없음)" },
  { label: "관람등급", value: "초등학생 이상" },
  { label: "공연구분", value: "대관공연 · 음악" },
  { label: "주최·주관", value: "튀김소보체" },
  {
    label: "후원",
    value: "MULTICS, 한국메세나협회, 한국문화예술위원회",
  },
];

const VIDEOS = [
  { id: "H-bZDO64GsA", title: "싱포골드 무대 영상 1" },
  { id: "IprlWzGhhi0", title: "싱포골드 무대 영상 2" },
];

const GALLERY = [
  { src: "/images/soborche-gallery/1.jpg", width: 1440, height: 1080 },
  { src: "/images/soborche-gallery/2.jpg", width: 1224, height: 816 },
  { src: "/images/soborche-gallery/3.jpg", width: 1440, height: 1920 },
  { src: "/images/soborche-gallery/4.jpg", width: 1092, height: 816 },
  { src: "/images/soborche-gallery/5.jpg", width: 1440, height: 1080 },
  { src: "/images/soborche-gallery/6.jpg", width: 1440, height: 1920 },
  { src: "/images/soborche-gallery/7.jpg", width: 1440, height: 1799 },
  { src: "/images/soborche-gallery/8.jpg", width: 1440, height: 991 },
  { src: "/images/soborche-gallery/9.jpg", width: 1440, height: 1800 },
  { src: "/images/soborche-gallery/10.jpg", width: 1440, height: 1799 },
  { src: "/images/soborche-gallery/11.jpg", width: 1440, height: 1800 },
  { src: "/images/soborche-gallery/12.jpg", width: 1034, height: 582 },
];

export default function SoborchePage() {
  return (
    <div>
      <PageHero
        src="/images/soborche-hero.jpg"
        alt="튀김소보체"
        eyebrow="SHOW CHOIR"
        title="튀김소보체"
      />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <section className="mb-14 overflow-hidden rounded-2xl border border-accent/40 bg-background-elevated">
          <div className="border-b border-line bg-accent-soft px-6 py-3 text-center text-xs tracking-[0.3em] text-accent">
            UPCOMING CONCERT
          </div>

          <div className="p-6 sm:flex sm:gap-7 sm:p-7">
            <a
              href="/images/soborche-concert-poster.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full shrink-0 self-start overflow-hidden rounded-xl border border-line transition-opacity hover:opacity-90 sm:w-56"
            >
              <Image
                src="/images/soborche-concert-poster.jpg"
                alt="튀김소보체 콘서트 Taste of Classic 포스터"
                width={1000}
                height={1415}
                className="h-auto w-full"
              />
            </a>

            <div className="mt-6 min-w-0 sm:mt-0">
              <p className="text-xs tracking-widest text-accent">
                2ND 앨범 〈CLASSIC RE:BORN〉 발매기념
              </p>
              <h2 className="mt-2 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                튀김소보체 콘서트
                <br />
                〈Taste of Classic〉
              </h2>

              <dl className="mt-5 space-y-2.5 text-sm">
                {CONCERT_INFO.map((info) => (
                  <div key={info.label} className="flex gap-3">
                    <dt className="w-16 shrink-0 text-muted/80">
                      {info.label}
                    </dt>
                    <dd className="min-w-0 flex-1 text-foreground">
                      {info.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://nol.yanolja.com/ticket/products/26013015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold tracking-wide text-background transition-opacity hover:opacity-90"
                >
                  NOL티켓 예매하기 →
                </a>
                <a
                  href="https://www.daejeon.go.kr/djac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-6 py-3 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
                >
                  대전예술의전당
                </a>
              </div>

              <p className="mt-4 text-xs leading-6 text-muted/80">
                예매 문의 나무예술기획{" "}
                <a
                  href="tel:0424778220"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  042-477-8220
                </a>
                {" "}· NOL티켓 1544-1555
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            클래식 보컬의 하모니와 쇼 퍼포먼스를 결합한 퓨전 클래식 앙상블,
            튀김소보체의 한 사람으로 함께합니다.
          </p>
          <p>
            &lsquo;보체(voce)&rsquo;는 이탈리아어로 &lsquo;목소리&rsquo;라는
            뜻으로, 팀 이름에는 &lsquo;무엇을 튀겨도 맛있는 튀김처럼 무슨
            노래를 불러도 맛있게 부른다&rsquo;는 의미를 담았습니다.
          </p>
          <p>
            2022년 SBS 〈싱포골드〉에 쇼콰이어 팀으로 창단해 참가, 심사위원들의
            극찬을 받으며 화제가 되었습니다. 클래식을 기반으로 대중음악과 팝,
            크로스오버까지 아우르며 관객과 함께 즐기는 쇼콰이어 무대를
            선보입니다.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <p className="border-b border-line bg-background-elevated px-6 py-3 text-xs tracking-[0.25em] text-accent">
            MEMBER
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 bg-background-elevated px-6 py-5">
            {MEMBERS.map((name) => (
              <li
                key={name}
                className={
                  name === "지정윤"
                    ? "text-sm font-bold text-accent sm:text-base"
                    : "text-sm text-foreground sm:text-base"
                }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <p className="border-b border-line bg-background-elevated px-6 py-3 text-xs tracking-[0.25em] text-accent">
            ALBUM
          </p>
          <div className="divide-y divide-line">
            {ALBUMS.map((album) => (
              <div
                key={album.title}
                className="bg-background-elevated px-6 py-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs font-bold tracking-widest text-accent">
                    {album.order}
                  </span>
                  <h3 className="font-display text-lg text-foreground sm:text-xl">
                    {album.title}
                  </h3>
                  <span className="text-xs text-muted/80">
                    {album.releasedAt}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  수록곡 {album.tracks}
                </p>
                <a
                  href={album.melonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs tracking-wide text-accent transition-colors hover:bg-accent-soft"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <circle cx="7" cy="17.5" r="2.5" />
                    <circle cx="17" cy="15.5" r="2.5" />
                    <path d="M9.5 17.5V6l10-2v11.5" strokeLinejoin="round" />
                  </svg>
                  <span>멜론에서 듣기</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs tracking-[0.25em] text-accent">
            튀김소보체 채널
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/fried_sovoce_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
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
              <span>Instagram</span>
            </a>
            <a
              href="https://youtube.com/@fried_sovoce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7z" />
                <path d="M10 9.5v5l4.5-2.5z" fill="var(--background)" />
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <div className="mt-10">
          <VideoGallery videos={VIDEOS} />
        </div>

        <div className="mt-10">
          <ImageGallery images={GALLERY} alt="튀김소보체 공연 사진" />
        </div>

        <div className="mt-10">
          <a
            href="https://programs.sbs.co.kr/enter/performance/clip/71938/OC463270660"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-accent px-7 py-3 text-sm tracking-wide text-accent transition-colors hover:bg-accent-soft"
          >
            SBS 싱포골드 무대 영상 보기 →
          </a>
        </div>

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 공개된 자료를 바탕으로 작성했습니다. 튀김소보체 관련 추가 정보나
          영상 링크를 보내주시면 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
