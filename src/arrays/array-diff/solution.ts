function arrayDiff(arr1: number[], arr2: number[]): number[] {
  const exclude = new Set(arr2);
  return arr1.filter((num) => !exclude.has(num));
}

console.log(arrayDiff([1, 2, 3, 4, 5, 6], [4, 6, 8, 0])); // [1, 2, 3, 5]
console.log(arrayDiff([3, 1, 1, 1, 1, 2, 2, 2], [4, 4, 2, 7, 8, 8])); // [3, 1, 1, 1, 1]
