function uniteUnique(...arrays: number[][]): number[] {
  return [...new Set(arrays.flat())];
}

function uniteUniqueV2(...arrays: Array<number[]>): number[] {
  const unique = new Set<number>();

  for (const num of arrays.flat()) {
    unique.add(num);
  }

  return [...unique];
}

console.log(uniteUniqueV2([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]));
