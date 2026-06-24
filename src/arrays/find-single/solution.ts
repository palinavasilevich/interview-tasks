function findSingle(arr: number[]): number {
  const map = new Map<number, number>();

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const [key, count] of map) {
    if (count === 1) return key;
  }

  throw new Error("No single element found");
}

// v2: XOR — O(n) time, O(1) space
function findSingleXOR(arr: number[]): number {
  return arr.reduce((acc, num) => acc ^ num, 0);
}
