import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "소개 | 소프라노 지정윤",
};

const FACTS: { label: string; items: string[] }[] = [
  {
    label: "현재",
    items: [
      "세종드림예술기획 대표",
      "세종리틀싱어즈 단장 및 상임지휘자 (2023.10~)",
      "싱투게더콰이어 지휘자",
      "클래시컬 쇼콰이어 튀김소보체 단원",
      "디바칸타빌레 대표",
      "세종시 음악협회 회원",
      "세종생활음악협회 사무국장",
    ],
  },
  {
    label: "이전 경력",
    items: [
      "준 시어터 소속 뮤지컬 배우 및 팝페라 가수",
      "계룡시 어린이 뮤지컬 합창단 상임지휘자",
      "세종 사계절하모니합창단 상임지휘자",
      "경찰대학교 강사",
      "세종하모니앙상블 대표",
      "육·해·공군 3군본부 군악대 객원 지휘",
    ],
  },
  {
    label: "학력",
    items: [
      "숙명여자대학교 음악대학 성악과 석사 졸업",
      "이탈리아 페스카라(Pescara) 시립음악원 최고연주자과정 성악 전공 졸업",
      "이탈리아 페스카라(Pescara) 시립음악원 'Canto Spagnolo' 과정 수료",
      "미국 워싱턴 D.C. The Theatre Lab School of Dramatic Arts 뮤지컬 연기 과정 수료",
    ],
  },
  {
    label: "주요 수상",
    items: [
      "World Choir Games(세계합창대회) 어린이합창 부문 Silver Diploma",
      "세종시 예술인상",
      "세종시 교육감상 (제119회 소방동요대회 대상 지도자상)",
      "강경포구 전국 어린이 동요대회 지도자상 등 다수",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        src="/images/about-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="ABOUT"
        title="소개"
        imagePosition="object-[center_15%]"
      />

      <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p className="text-base font-bold text-foreground sm:text-lg">
            무대와 삶, 그 모든 순간을 노래로 채워온 소프라노 지정윤을
            소개합니다.
          </p>
          <p>
            소프라노 지정윤은 숙명여자대학교 음악대학 성악과 석사를 마치고,
            이탈리아 페스카라 시립음악원에서 최고연주자과정과 &lsquo;Canto
            Spagnolo&rsquo; 과정을 수료했으며, 미국 워싱턴 D.C.의 The
            Theatre Lab School of Dramatic Arts에서 뮤지컬 연기 과정을
            수료했습니다. 팝페라 그룹 &lsquo;칼라스&rsquo;와 준 시어터
            소속으로 다수의 뮤지컬 갈라콘서트에 출연했고, 스위스 취리히와
            이탈리아 줄리아넬로 초청 연주 등 국내외 무대에서 활동해
            왔습니다.
          </p>
          <p>
            계룡시 어린이 뮤지컬 합창단의 상임지휘자를 역임했고, 경찰대학교
            강사와 세종하모니앙상블 대표를 지내며 지휘자로서 경험을
            쌓아왔습니다. 세종 사계절하모니합창단 지휘자로 활동하던 2023년
            에는 세계합창대회(World Choir Games) 어린이합창 부문 실버
            디플로마를 수상했고, 세종시 예술인상과 세종시 교육감상 등을
            수상하며 지도력을 인정받았습니다.
          </p>
          <p>
            현재는 세종드림예술기획 대표, 세종리틀싱어즈 단장 및
            상임지휘자, 싱투게더콰이어 지휘자, 디바칸타빌레 대표로서 활발히
            활동하며, 클래시컬 쇼콰이어 &lsquo;튀김소보체&rsquo;의 단원으로도
            함께하고 있습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-1 gap-2 bg-background-elevated p-6 sm:grid-cols-[120px_1fr] sm:gap-6"
            >
              <span className="text-xs tracking-widest text-accent">
                {fact.label}
              </span>
              <ul className="space-y-1.5">
                {fact.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 위 소개는 본인 제공 프로필 자료 및 네이버 인물정보(본인/대리인
          관리)를 바탕으로 작성했습니다. 추가로 반영할 내용이 있으면
          알려주세요.
        </p>
      </div>
    </div>
  );
}
