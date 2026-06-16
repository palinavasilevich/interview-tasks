function sumDigits(num: number): number {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, current) => sum + +current, 0);
}
