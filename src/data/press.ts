export type PressItem = {
  id: string;
  date: string;
  outlet: string;
  title: string;
  excerpt: string;
  url: string;
  tag: string;
};

// 웹 검색으로 실제 확인된 언론 보도만 수록했습니다.
// 추가 보도자료(원문 링크)를 보내주시면 이 목록에 반영합니다.
export const pressItems: PressItem[] = [
  {
    id: "hankookilbo-2017-08-15",
    date: "2017.08.15",
    outlet: "한국일보",
    title: "암 투병 소프라노 \"암 환자들에 용기를\" 병원 콘서트",
    excerpt:
      "유방암 진단과 수술을 딛고 이탈리아 유학 시절 인연을 맺은 동료 음악가들과 함께, 암 환자들을 위한 음악회 '한여름밤의 꿈'을 대전 유성선병원에서 기획·개최한 소프라노 지정윤의 이야기.",
    url: "https://www.hankookilbo.com/news/article/201708150443380750",
    tag: "나눔 콘서트",
  },
  {
    id: "goodmorningcc-2017",
    date: "2017.08",
    outlet: "굿모닝충청",
    title: "유성선병원, \"암 투병중인 소프라노가 기획한 감동 음악회 열린다\"",
    excerpt:
      "암 투병 중에도 병원 동료 환자들을 위한 음악회를 직접 제안하고 기획한 소프라노 지정윤의 사연과, 대전 유성선병원에서 열린 힐링 음악회 소식을 전한 기사.",
    url: "https://www.goodmorningcc.com/news/articleView.html?idxno=69908",
    tag: "나눔 콘서트",
  },
];
