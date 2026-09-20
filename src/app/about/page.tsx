import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "소개 | 소프라노 지정윤",
};

const FACTS: { label: string; items: string[] }[] = [
  {
    label: "경력",
    items: [
      "현 세종리틀싱어즈 단장 (2023.10~)",
      "현 세종드림예술기획 대표",
      "세종 사계절하모니합창단 지휘자 역임",
      "계룡시 뮤지컬 어린이합창단 지휘자 역임",
    ],
  },
  {
    label: "학력",
    items: [
      "숙명여자대학교 대학원 성악학과 석사",
      "이탈리아 페스카레제 시립음악원(Accademia Musicale Pescarese) 최고연주자과정 수료",
      "이탈리아 페스카레제 시립음악원 'Canto Spagnole' 수료",
    ],
  },
  {
    label: "수상",
    items: ["2023년 World Choir Game Silver Diploma", "2023년 세종 음악인상"],
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
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p>
            소프라노 지정윤은 숙명여자대학교 대학원에서 성악학 석사를 마치고,
            이탈리아 페스카레제 시립음악원에서 최고연주자과정과 &lsquo;Canto
            Spagnole&rsquo; 과정을 수료했습니다. 팝페라 그룹
            &lsquo;칼라스&rsquo;의 멤버로 다수의 뮤지컬 갈라콘서트에
            출연했고, 스위스 취리히와 이탈리아 줄리아넬로 초청 연주 등
            국내외 무대에서 활동해 왔습니다.
          </p>
          <p>
            세종 사계절하모니합창단과 계룡시 뮤지컬 어린이합창단의 지휘자를
            역임했으며, 육·해·공군 3군본부 군악대 객원 지휘를 맡기도
            했습니다.
          </p>
          <p>
            현재는 세종리틀싱어즈의 단장으로서 아이들과 함께 무대를
            만들어가는 한편, 세종드림예술기획 대표로서 지역 음악 활동을
            이어가고 있습니다.
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
          ※ 위 소개는 네이버 인물정보(본인/대리인 관리) 및 공개된 자료를
          바탕으로 작성했습니다. 추가로 반영할 내용이 있으면 알려주세요.
        </p>
      </div>
    </div>
  );
}
