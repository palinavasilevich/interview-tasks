/*
 * Task 4 - unknown and arrays
 * Create a function that checks whether unknown is an array of numbers;
 * if so, return the sum of all numbers;
 * if not, return null.
 */

export function sumNumbers(value: unknown): number | null {
  if (Array.isArray(value)) {
    const isNumbersArray = value.every((num) => typeof num === "number");

    if (isNumbersArray) {
      return value.reduce((sum, num) => sum + num, 0);
    }
  }

  return null;
}
