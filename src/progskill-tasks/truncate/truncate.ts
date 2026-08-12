export function truncate(str: string, maxLength: number) {
  return str.length > maxLength + 3 ? str.slice(0, maxLength) + "..." : str;
}
