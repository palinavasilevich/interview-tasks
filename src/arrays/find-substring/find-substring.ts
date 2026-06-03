export function findSubstring(substring: string, arr: string[]): string[] {
  return arr.filter((str) => str.includes(substring));
}
