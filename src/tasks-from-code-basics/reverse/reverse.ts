export function reverse(numbers: readonly number[]): number[] {
  if (numbers.length === 0) return [];

  const result: number[] = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }

  return result;
}

export function reverseV2(numbers: readonly number[]): number[] {
  return numbers.map((_, index) => numbers[numbers.length - 1 - length]);
}

// function reverse(coll: readonly number[]): number[] {
//   return coll.map((_, index) => coll[coll.length - 1 - index]);
// }

console.log(reverse([1, 2, 8])); // [8, 2, 1]
console.log(reverse([10, 33, 7, 0])); // [0, 7, 33, 10]
