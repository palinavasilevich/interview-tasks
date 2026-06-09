function findUnique(numbers: number[]): number | undefined {
  const frequency = new Map();

  for (const num of numbers) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  for (const key of frequency.keys()) {
    if (frequency.get(key) === 1) return key;
  }
}

function findUniqueV2(numbers: number[]): number | undefined {
  for (const num of numbers) {
    if (numbers.indexOf(num) === numbers.lastIndexOf(num)) return num;
  }
}

function findUniqueV3(numbers: number[]): number | undefined {
  const sorted = numbers.toSorted((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const currentNum = sorted[i];
    if (currentNum !== sorted[i - 1] && currentNum !== sorted[i + 1])
      return currentNum;
  }
}

function findUniqueV4(numbers: number[]): number {
  return numbers.reduce((acc, n) => {
    console.log(acc ^ n);
    return acc ^ n;
  }, 0);
}
