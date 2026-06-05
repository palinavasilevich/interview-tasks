export function twoMaxNumbers(numbers: number[]): [number, number] {
  const [first, second] = [...new Set(numbers)].sort((a, b) => b - a);
  return [first, second];
}

export function twoMaxNumbersV2(numbers: number[]): [number, number] {
  const firstMax = numbers.reduce((a, b) => Math.max(a, b));
  const filtered = numbers.filter((num) => num !== firstMax);
  const secondMax = filtered.reduce((a, b) => Math.max(a, b));

  return [firstMax, secondMax];
}

export function twoMaxNumbersV3(numbers: number[]): [number, number] {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (const num of numbers) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
      secondMax = num;
    }
  }
  return [firstMax, secondMax];
}
