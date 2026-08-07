function map(
  numbers: number[],
  callback: (num: number, index: number) => number,
): number[] {
  const newArray = [] as number[];

  for (let i = 0; i < numbers.length; i++) {
    const result = callback(numbers[i], i);
    newArray.push(result);
  }

  return newArray;
}

console.log(map([3, 9], (n) => n - 3));
// [0, 6]

console.log(map([8, 9], (n) => n + 8));
// [16, 17]

console.log(map([8, 9], (n, index) => index + n));
// [8, 10]
