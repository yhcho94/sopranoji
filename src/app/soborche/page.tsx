import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "튀김소보체 | 소프라노 지정윤",
};

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

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p>
            지정윤은 성악가들로 구성된 클래식 쇼콰이어 팀
            &lsquo;튀김소보체&rsquo;의 멤버로 활동하고 있습니다. 2022년 9월
            방영된 SBS 퍼포먼스 합창 오디션 프로그램 &lsquo;싱포골드(Sing For
            Gold)&rsquo;에 출연해 뛰어난 무대를 선보였습니다.
          </p>
          <p>
            해당 프로그램에서 &lsquo;라젠카, 세이브 어스(Lazenca, Save
            Us)&rsquo;를 웅장한 성악 스타일로 편곡해 큰 화제를 모았으며,
            &lsquo;클라시쿠스&rsquo;, &lsquo;목청맨션&rsquo; 등 다른 참가
            팀들과 함께 완성도 높은 합동 무대를 펼치기도 했습니다.
          </p>
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
