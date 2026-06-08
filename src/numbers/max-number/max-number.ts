function max(numbers: number[]): number {
  return Math.max(...numbers);
}


function maxV2(numbers: number[]): number {
  let max = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

function maxV3(numbers: number[]): number {
  return numbers.reduce((max, num) => (num > max ? num : max));
}

console.log(max([3, 6, 1, 5])); // 6
