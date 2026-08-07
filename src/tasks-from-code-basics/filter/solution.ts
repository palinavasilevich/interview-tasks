function filter(
  numbers: number[],
  callback: (num: number) => boolean,
): number[] {
  const initial: number[] = [];

  return numbers.reduce((acc, num) => {
    if (callback(num)) {
      acc.push(num);
    }

    return acc;
  }, initial);
}

const numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, (n) => n > 3)); // [4, 133]
console.log(filter(numbers, (n) => n % 2 == 0)); // [2, 4]
