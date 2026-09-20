export function dateSortKey(date: string): number {
  const match = date.match(/^(\d{4})(?:\.(\d{2}))?(?:\.(\d{2}))?/);
  if (!match) return 0;
  const [, y, m = "01", d = "01"] = match;
  return Number(`${y}${m}${d}`);
}
