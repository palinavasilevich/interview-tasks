/*
Task 2 - Arrays of Numbers
Create a function that finds the maximum number in an array.
*/

export function findMax(numbers: number[]): number | null {
  if (numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
}
