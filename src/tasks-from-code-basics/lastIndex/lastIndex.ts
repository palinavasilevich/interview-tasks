export function lastIndex(str: string, char: string): number | null {
  for (let i = str.length - 1; i >= 0; i--) {
    if (char === str[i]) return i;
  }
  return null;
}
