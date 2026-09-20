export type PressItem = {
  id: string;
  date: string;
  outlet: string;
  title: string;
  excerpt: string;
  url: string;
  tag: string;
};

// 추가 보도자료(원문 링크)를 보내주시면 이 목록에 반영합니다.
export const pressItems: PressItem[] = [];
