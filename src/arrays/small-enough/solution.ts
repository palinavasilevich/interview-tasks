function smallEnough(numbers: number[], limit: number): boolean {
  return numbers.every((num) => num <= limit);
}

console.log(smallEnough([1, 2, 3], 5)); // true
console.log(smallEnough([-5, 5], 5)); // true
console.log(smallEnough([1, 12, 3], 5)); // false
