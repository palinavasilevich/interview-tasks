export function isAnagram(a: string, b: string): boolean {
  const s1 = a.toLowerCase();
  const s2 = b.toLowerCase();

  if (s1.length !== s2.length) return false;

  const mapA = new Map<string, number>();
  const mapB = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    mapA.set(s1[i], (mapA.get(s1[i]) ?? 0) + 1);
    mapB.set(s2[i], (mapB.get(s2[i]) ?? 0) + 1);
  }

  for (const [letter, count] of mapA.entries()) {
    if (mapB.get(letter) !== count) return false;
  }

  return true;
}

export function isAnagramV2(str1: string, str2: string): boolean {
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");

  return normalize(str1) === normalize(str2);
}
