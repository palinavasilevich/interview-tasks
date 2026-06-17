function removeDuplicates(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

function removeDuplicatesV2(numbers: number[]): number[] {
  const seen = new Set<number>();
  const unique: number[] = [];

  for (const num of numbers) {
    if (!seen.has(num)) {
      seen.add(num);
      unique.push(num);
    }
  }

  return unique;
}
