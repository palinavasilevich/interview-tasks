function getMinMax(numbers: number[]): [number, number] {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return [min, max];
}
