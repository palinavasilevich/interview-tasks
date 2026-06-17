function nonUniqueNumbers(numbers: number[]): number[] {
  const freq = new Map<number, number>();

  for (const num of numbers) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  return numbers.filter((num) => (freq.get(num) as number) > 1);
}

const numbers = [10, 5, 1, 2, 5, 3, 2, 1, 5, 8];
console.log(nonUniqueNumbers(numbers));
//  [5, 1, 2, 5, 2, 1, 5];
