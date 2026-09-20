import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import PastPerformances from "@/components/PastPerformances";
import { performances } from "@/data/performances";

export const metadata: Metadata = {
  title: "성악가 | 소프라노 지정윤",
};

// 올해와 작년 공연만 펼쳐서 보여주고, 그 이전은 접어서 표시합니다.
const PAST_YEAR_CUTOFF = new Date().getFullYear() - 2;
const recentPerformances = performances.filter(
  (item) => Number(item.date.slice(0, 4)) > PAST_YEAR_CUTOFF,
);
const pastPerformances = performances.filter(
  (item) => Number(item.date.slice(0, 4)) <= PAST_YEAR_CUTOFF,
);

const GALLERY = [
  { src: "/images/vocalist-gallery/1.jpg", width: 1280, height: 1600 },
  { src: "/images/vocalist-gallery/2.jpg", width: 1536, height: 2048 },
  { src: "/images/vocalist-gallery/3.jpg", width: 1706, height: 1280 },
  { src: "/images/vocalist-gallery/4.jpg", width: 1440, height: 1920 },
  { src: "/images/vocalist-gallery/5.jpg", width: 1440, height: 1920 },
  { src: "/images/vocalist-gallery/6.jpg", width: 1080, height: 1080 },
];

export default function VocalistPage() {
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
            소프라노 지정윤은 숙명여자대학교 음악대학 성악과 석사를 마치고,
            이탈리아 페스카라 시립음악원에서 최고연주자과정과 &lsquo;Canto
            Spagnolo&rsquo; 과정을 수료했으며, 미국 워싱턴 D.C.의 The
            Theatre Lab School of Dramatic Arts에서 뮤지컬 연기 과정을
            수료했습니다.
          </p>
          <p>
            팝페라 그룹 &lsquo;칼라스&rsquo;와 준 시어터 소속으로 다수의
            뮤지컬 갈라콘서트에 출연했고, 스위스 취리히와 이탈리아
            줄리아넬로 초청 연주 등 국내외 무대에서 활동해 왔습니다. 클래식
            쇼콰이어 &lsquo;튀김소보체&rsquo;의 멤버로도 활동하고 있습니다.
          </p>
          <p>
            현재는 디바칸타빌레 대표로서 성악 활동을 이어가며, 최근에는
            세종시문화재단의 지원을 받아 독창회를 여는 등 지금도 꾸준히
            무대에 오르며 왕성하게 활동하고 있습니다.
          </p>
        </div>

        <div className="mt-10">
          <ImageGallery
            images={GALLERY}
            alt="소프라노 지정윤 공연 사진"
            layout="flow"
          />
        </div>

        <div className="mt-14">
          <p className="text-xs tracking-[0.4em] text-accent">PERFORMANCES</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">공연 이력</h2>
        </div>

        <div className="mt-8 space-y-6">
          {recentPerformances.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-line bg-background-elevated p-7"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                {item.upcoming && (
                  <span className="rounded-full border border-accent/40 px-3 py-1 text-accent">
                    예정
                  </span>
                )}
                <span>{item.date}</span>
                <span>·</span>
                <span>{item.venue}</span>
              </div>
              <h3 className="mt-4 font-display text-xl leading-snug text-foreground">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <PastPerformances items={pastPerformances} />

        <p className="mt-12 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 네이버 인물정보(본인/대리인 관리) 및 본인 제출 자료를 바탕으로
          정리했습니다. 추가 공연 정보를 보내주시면 목록에 반영하겠습니다.
        </p>
      </div>
    </div>
  );
}
