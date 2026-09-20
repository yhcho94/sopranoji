export type Performance = {
  id: string;
  date: string;
  title: string;
  venue: string;
  note?: string;
  upcoming?: boolean;
};

// 네이버 인물정보(본인/대리인 관리) 및 공개된 자료를 바탕으로 정리했습니다.
export const performances: Performance[] = [
  {
    id: "2026-dongyoya-2",
    date: "2026.09.05",
    title: "소프라노 지정윤 Classic & 동요음악회 〈동요야, 성악이랑 놀자〉",
    venue: "세종음악창작소 누리락",
    upcoming: true,
  },
  {
    id: "2022-dongyoya",
    date: "2022.10.29",
    title: "소프라노 지정윤 독창회 〈동요야, 클래식이랑 놀자〉",
    venue: "세종음악창작소 누리락",
  },
  {
    id: "2021-world-tour",
    date: "2021",
    title: "소프라노 지정윤 독창회 〈음악으로 떠나는 세계여행〉",
    venue: "세종",
  },
  {
    id: "2020-veranda-concert",
    date: "2020.07",
    title: "세종시 코로나극복 베란다콘서트",
    venue: "세종",
    note: "세종시 음악협회 · 코로나극복 세종시민추진위원회 주최, 사회 및 출연",
  },
  {
    id: "2020-police-univ",
    date: "2020.06",
    title: "경찰대학교 뮤지컬 인문학 특강",
    venue: "경찰대학교",
    note: "뮤지컬 작품을 통한 인문학적 교훈 전달 특강",
  },
  {
    id: "2019-recital",
    date: "2019",
    title: "소프라노 지정윤 독창회",
    venue: "세종",
  },
  {
    id: "2018-invitation",
    date: "2018",
    title: "논산시 공예품 경진대회 초청공연 등 다수 초청 연주",
    venue: "논산 · 계룡 일원",
  },
  {
    id: "2017-summer-dream",
    date: "2017.08",
    title: "나눔 음악회 〈한여름밤의 꿈〉",
    venue: "대전 유성선병원",
    note: "동료 음악가들과 함께 마련한 나눔 콘서트",
  },
];
