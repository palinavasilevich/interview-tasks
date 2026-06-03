export function isAnagram(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  const mapA = new Map();
  const mapB = new Map();

  for (let i = 0; i < a.length; i++) {
    mapA.set(a[i], (mapA.get(a[i]) || 0) + 1);
    mapB.set(b[i], (mapB.get(b[i]) || 0) + 1);
  }

  for (const [letter, count] of mapA.entries()) {
    if (mapB.get(letter) !== count) return false;
  }

  return true;
}
