export function findMax(numbers: number[]): number | null {
  if (numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
}
