import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "소개 | 소프라노 지정윤",
};

const FACTS = [
  {
    label: "활동",
    value: "소프라노 · 세종리틀싱어즈 지휘자 및 단장",
  },
  {
    label: "수학",
    value: "이탈리아 유학 (성악 전공)",
  },
  {
    label: "사회공헌",
    value:
      "유방암 투병을 극복하고, 암 환자를 위한 나눔 음악회 '한여름밤의 꿈' 기획·개최 (2017, 대전 유성선병원)",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-[0.4em] text-accent">ABOUT</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">소개</h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-[220px_1fr] sm:items-start">
        <div className="relative mx-auto aspect-[3/4] w-48 overflow-hidden rounded-2xl border border-accent/30 shadow-[0_0_40px_-10px_rgba(201,162,75,0.35)] sm:mx-0 sm:w-full">
          <Image
            src="/images/profile-hero.jpg"
            alt="소프라노 지정윤"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-sm leading-8 text-muted sm:text-base">
          <p>
            소프라노 지정윤은 이탈리아 유학을 통해 성악을 공부하고, 무대와
            병원, 지역사회를 오가며 노래를 나눠온 음악가입니다. 2016년 말
            유방암 진단을 받았지만 치료 과정 중에도 음악을 놓지 않았고, 유학
            시절 함께한 동료 음악가들과 뜻을 모아 암 환자들을 위한 나눔 음악회
            &lsquo;한여름밤의 꿈&rsquo;을 대전 유성선병원에서 기획해 무대에
            올렸습니다.
          </p>
          <p>
            현재는 세종리틀싱어즈의 지휘자이자 단장으로서, 아이들에게 노래를
            가르치고 함께 무대를 만들어가며 다음 세대에게 음악의 즐거움을
            전하고 있습니다.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="grid grid-cols-1 gap-1 bg-background-elevated p-6 sm:grid-cols-[120px_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="text-xs tracking-widest text-accent">
              {fact.label}
            </span>
            <span className="text-sm text-foreground sm:text-base">
              {fact.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-10 rounded-xl border border-dashed border-line p-5 text-xs leading-6 text-muted/80">
        ※ 위 소개는 공개된 언론 보도와 전달해 주신 정보를 바탕으로
        작성했습니다. 학력·경력·수상 내역·프로필 사진 등 추가 정보를 보내주시면
        정확한 내용으로 계속 보완하겠습니다.
      </p>
    </div>
  );
}
