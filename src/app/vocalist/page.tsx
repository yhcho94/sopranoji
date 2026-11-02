import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import PastPerformances from "@/components/PastPerformances";
import PerformanceList from "@/components/PerformanceList";
import { getPerformances } from "@/data/performances";

export const metadata: Metadata = {
  title: "성악가 | 소프라노 지정윤",
};

// 한 시간마다 다시 생성해 지난 공연 표시가 날짜에 맞게 갱신되도록 한다.
export const revalidate = 3600;

// 올해와 작년 공연만 펼쳐서 보여주고, 그 이전은 접어서 표시합니다.
function splitPerformances() {
  const cutoffYear = new Date().getFullYear() - 2;
  const all = getPerformances();

  return {
    recent: all.filter((item) => Number(item.date.slice(0, 4)) > cutoffYear),
    past: all.filter((item) => Number(item.date.slice(0, 4)) <= cutoffYear),
  };
}

const CONCERT_POSTERS = [
  {
    src: "/images/street-artist-concert/schedule.jpg",
    alt: "세종거리예술가 콘서트 공연 일정표",
  },
  {
    src: "/images/street-artist-concert/lineup-1009.jpg",
    alt: "세종거리예술가 콘서트 10월 9일 라인업",
  },
  {
    src: "/images/street-artist-concert/lineup-1010.jpg",
    alt: "세종거리예술가 콘서트 10월 10일 라인업",
  },
];

const GALLERY = [
  { src: "/images/vocalist-gallery/1.jpg", width: 1280, height: 1600 },
  { src: "/images/vocalist-gallery/2.jpg", width: 1536, height: 2048 },
  { src: "/images/vocalist-gallery/3.jpg", width: 1706, height: 1280 },
  { src: "/images/vocalist-gallery/4.jpg", width: 1440, height: 1920 },
  { src: "/images/vocalist-gallery/5.jpg", width: 1440, height: 1920 },
  { src: "/images/vocalist-gallery/6.jpg", width: 1080, height: 1080 },
];

export default function VocalistPage() {
  const { recent, past } = splitPerformances();

  return (
    <div>
      <PageHero
        src="/images/vocalist-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="VOCALIST"
        title="성악가"
      />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            이탈리아에서 다져온 성악을 바탕으로, 무대마다 진심을 담아
            노래하는 성악가입니다.
          </p>
          <p>
            숙명여자대학교 성악과 석사와 이탈리아 페스카라 시립음악원
            최고연주자과정을 마쳤습니다. 팝페라 그룹 &lsquo;칼라스&rsquo;와
            준 시어터 소속으로 다수의 뮤지컬 갈라콘서트에 출연했고, 스위스와
            이탈리아 초청 연주 등 국내외 무대에 섰습니다.
          </p>
          <p>
            현재는 디바칸타빌레 대표로 성악 활동을 이어가며, 세종시문화재단의
            지원을 받아 독창회를 여는 등 꾸준히 무대에 오르고 있습니다.
          </p>
        </div>

        <div className="mt-10">
          <ImageGallery images={GALLERY} alt="소프라노 지정윤 공연 사진" />
        </div>

        <section className="mt-14 overflow-hidden rounded-2xl border border-line bg-background-elevated">
          <p className="border-b border-line px-6 py-3 text-center text-xs tracking-[0.3em] text-muted/80">
            CONCERT RECORD
          </p>

          <div className="p-6 sm:p-7">
            <p className="text-xs tracking-widest text-accent">
              2026 세종한글축제 연계
            </p>
            <h2 className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
              세종거리예술가 콘서트
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              2026년 10월 9일(금)·10일(토) 이틀 동안{" "}
              <b className="text-foreground">세종호수공원 수상무대섬</b>에서
              열린 공연으로, 지정윤이 이틀 모두{" "}
              <b className="text-foreground">13:00~13:40</b> 팝페라 무대에
              올랐습니다. 세종특별자치시와 세종시문화관광재단이 함께한
              세종한글축제 연계 공연으로 두 무대 모두 잘 마쳤습니다.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {CONCERT_POSTERS.map((poster) => (
                <a
                  key={poster.src}
                  href={poster.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-xl border border-line transition-opacity hover:opacity-90"
                >
                  <Image
                    src={poster.src}
                    alt={poster.alt}
                    width={1200}
                    height={1500}
                    className="h-auto w-full"
                  />
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted/80">
              포스터를 누르면 크게 볼 수 있습니다.
            </p>
          </div>
        </section>

        <div className="mt-14">
          <p className="text-xs tracking-[0.4em] text-accent">PERFORMANCES</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">공연 이력</h2>
        </div>

        <PerformanceList items={recent} />

        <PastPerformances items={past} />

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 네이버 인물정보(본인/대리인 관리) 및 본인 제출 자료를 바탕으로
          정리했습니다. 추가 공연 정보를 보내주시면 목록에 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
