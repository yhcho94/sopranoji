import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "튀김소보체 | 소프라노 지정윤",
};

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
            지정윤은 성악가들로 구성된 클래식 쇼콰이어
            &lsquo;튀김소보체&rsquo;의 멤버로 활동하고 있습니다. 2022년 9월
            방송을 시작한 SBS 예능 오디션 프로그램 &lsquo;싱포골드(Sing For
            Gold)&rsquo;에 출연해 무대를 선보였습니다.
          </p>
          <p>
            프로그램에서는 &lsquo;라젠카, 세이브 어스&rsquo;를 성악적으로
            편곡한 무대로 화제를 모았고, &lsquo;클라시쿠스&rsquo;,
            &lsquo;목청맨션&rsquo; 등 다른 팀과 함께하는 합동 무대도
            선보였습니다.
          </p>
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
