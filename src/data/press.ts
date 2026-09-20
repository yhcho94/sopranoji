export type PressItem = {
  id: string;
  date: string;
  outlet: string;
  title: string;
  excerpt: string;
  url: string;
  tag: string;
};

// 웹 검색으로 검증된 언론 기사만 수록했습니다. 추가 보도자료(원문 링크)를 보내주시면 이 목록에 반영합니다.
export const pressItems: PressItem[] = [
  {
    id: "2022-dongyang-dongyoya",
    date: "2022.10.13",
    outlet: "동양일보",
    title: "소프라노 지정윤 29일 '동요야 클래식이랑 놀자' 독창회",
    excerpt:
      "10월 29일 세종음악창작소 누리락에서 열리는 소프라노 지정윤의 독창회 '동요야, 클래식이랑 놀자'를 소개. 세종시문화재단 전문 예술창작 지원사업 선정작으로, 푸치니·슈베르트·헨델의 아리아와 가곡, 동요 무대로 구성됐다.",
    url: "http://www.dynews.co.kr/news/articleView.html?idxno=676532",
    tag: "독창회",
  },
];
