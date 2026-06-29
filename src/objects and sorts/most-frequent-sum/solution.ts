function mostFrequentSum(a1: number[], a2: number[]): Array<number[]> {
  if (a1.length !== a2.length) return [];

  const sumsMap = new Map<number, number[][]>();

  a1.forEach((num1, index) => {
    const num2 = a2[index];
    const sum = num1 + num2;
    const pairs = sumsMap.get(sum) ?? [];
    sumsMap.set(sum, [...pairs, [num1, num2]]);
  });

  let maxCount = 0;
  let maxSumKey = -Infinity;
  let result: Array<number[]> = [];

  for (const [key, value] of sumsMap) {
    if (
      value.length > maxCount ||
      (value.length === maxCount && key > maxSumKey)
    ) {
      maxCount = value.length;
      maxSumKey = key;
      result = value;
    }
  }

  return result;
}

console.log(
  mostFrequentSum([3, 1, 0, 1, 4, 1, 2, 2], [1, 2, 3, 1, 0, 5, 1, 2]),
);
