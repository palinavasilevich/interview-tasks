function forEach(
  numbers: number[],
  callback: (num: number, index: number) => void,
): void {
  for (let i = 0; i < numbers.length; i++) {
    callback(numbers[i], i);
  }
}

forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [] as number[];
forEach([1, 2, 3], (n) => result.push(n));
console.log(result);
// [1, 2, 3]

forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10
