import { dateSortKey } from "@/lib/date";

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
const PRESS_ITEMS_RAW: PressItem[] = [
  {
    id: "2021-thetoday-world-tour",
    date: "2021.11.08",
    outlet: "the-today.com",
    title: "지정윤, 27일 '음악으로 떠나는 세계여행' 독창회",
    excerpt:
      "세종시 문화재단 청년예술가로 선정된 이탈리아 유학파 성악가 지정윤이 27일 오후 7시 반곡동 비오케이아트센터 공연장에서 독창회 무대를 갖는다. 이탈리아·독일·미국 등 세계 각국 대표곡으로 감동을 선사할 예정이다.",
    url: "https://www.the-today.com/news/articleView.html?idxno=54451",
    tag: "독창회",
  },
  {
    id: "2024-shinailbo-yangyang-concert",
    date: "2024.08.22",
    outlet: "신아일보",
    title: "양양문화재단, 남대천 퐁당퐁당물놀이장서 야외 콘서트 24일 개최",
    excerpt:
      "시선을 사로잡는 다양한 레퍼토리 공연. 하트 퀸의 전통 마술공연, 소프라노 지정윤, 인디아모 공연, 에이스트링, 튠에이드, 딴따라패밀리 등이 출연한다.",
    url: "https://www.shinailbo.co.kr/news/articleView.html?idxno=1920994",
    tag: "야외공연",
  },
  {
    id: "2025-ccnnews-artemi-freedom-harmony",
    date: "2025.08.20",
    outlet: "충청뉴스",
    title: "아르테미, 광복 80주년 기념 콘서트 'Freedom Harmony' 성황리 개최",
    excerpt:
      "세종 문화예술단체 아르테미(대표 김미경)가 기획하고 ㈜에이스와 세종시메세나협회가 후원한 광복 80주년 기념 콘서트 'Freedom Harmony'가 지난 17일 세종 비오케이아트센터 공연장에서 성황리에 막을 내렸다.",
    url: "http://www.ccnnews.co.kr/news/articleView.html?idxno=381987",
    tag: "콘서트",
  },
  {
    id: "2026-jbnews-dongyoya-2",
    date: "2026.08.31",
    outlet: "중부매일",
    title: "소프라노 지정윤, 9월 5일 '동요야, 성악이랑 놀자Ⅱ' 리사이틀 개최",
    excerpt:
      "소프라노 지정윤이 오는 9월 5일 오후 5시, 세종음악창작소 누리락에서 '2026 소프라노 지정윤 리사이틀 – 동요야, 성악이랑 놀자Ⅱ'를 개최한다.",
    url: "https://www.jbnews.com/news/articleView.html?idxno=1510511",
    tag: "리사이틀",
  },
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

export const pressItems = [...PRESS_ITEMS_RAW].sort(
  (a, b) => dateSortKey(b.date) - dateSortKey(a.date),
);
