export function isStrictlyMonotonic(numbers: number[]): boolean {
  const isIncreasing = numbers.every((item, index, array) => {
    if (array[index + 1] === undefined) return true;
    return item > array[index + 1];
  });

  const isDecreasing = numbers.every((item, index, array) => {
    if (array[index + 1] === undefined) return true;
    return item < array[index + 1];
  });

  return isIncreasing || isDecreasing;
}

export function isStrictlyMonotonicV2(numbers: number[]): boolean {
  if (numbers.length <= 1) return true;

  const isIncreasing = numbers[0] < numbers[1];

  for (let i = 1; i < numbers.length; i++) {
    if (
      isIncreasing ? numbers[i] <= numbers[i - 1] : numbers[i] >= numbers[i - 1]
    ) {
      return false;
    }
  }

  return true;
}
