import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "지휘자 | 소프라노 지정윤",
};

const ROLES = [
  "세종리틀싱어즈 단장 (2023.10~)",
  "세종드림예술기획 대표",
  "세종 사계절하모니합창단 지휘자",
];

const AWARDS = ["2023년 World Choir Game Silver Diploma", "2023년 세종 음악인상"];

export default function ConductorPage() {
  return (
    <div>
      <PageHero
        src="/images/profile-hero.jpg"
        alt="소프라노 지정윤"
        eyebrow="CONDUCTOR"
        title="지휘자"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p>
            지정윤은 세종리틀싱어즈의 단장으로서 아이들과 함께 무대를
            만들어가는 한편, 세종드림예술기획 대표와 세종 사계절하모니합창단
            지휘자로서 지역 음악 활동을 이어가고 있습니다.
          </p>
          <p>
            계룡시 어린이뮤지컬합창단을 창단해 상임지휘자를 지냈고, 육·해·공군
            3군본부 군악대 객원 지휘를 맡기도 했습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          <div className="grid grid-cols-1 gap-2 bg-background-elevated p-6 sm:grid-cols-[120px_1fr] sm:gap-6">
            <span className="text-xs tracking-widest text-accent">현재</span>
            <ul className="space-y-1.5">
              {ROLES.map((item) => (
                <li key={item} className="text-sm text-foreground sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-2 bg-background-elevated p-6 sm:grid-cols-[120px_1fr] sm:gap-6">
            <span className="text-xs tracking-widest text-accent">수상</span>
            <ul className="space-y-1.5">
              {AWARDS.map((item) => (
                <li key={item} className="text-sm text-foreground sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
          ※ 위 소개는 네이버 인물정보(본인/대리인 관리) 및 공개된 자료를
          바탕으로 작성했습니다. 추가로 반영할 내용이 있으면 알려주세요.
        </p>
      </div>
    </div>
  );
}
