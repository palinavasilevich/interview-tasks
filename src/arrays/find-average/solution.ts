function findAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  const totalSum = numbers.reduce((sum, current) => sum + current, 0);
  return totalSum / numbers.length;
}

console.log(findAverage([]));
console.log(findAverage([1, 2, 3, 4]));
