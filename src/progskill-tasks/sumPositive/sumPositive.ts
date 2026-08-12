export function sumPositive(numbers: number[]) {
  return numbers.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
}
