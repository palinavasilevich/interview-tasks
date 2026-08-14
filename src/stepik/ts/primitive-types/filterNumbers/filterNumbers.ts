/*
Task 8 - Arrays with different types (union)
Create a function that filters only numbers from a mixed array.
*/

export function filterNumbers(mixedArray: (number | string)[]): number[] {
  return mixedArray.filter((item) => typeof item === "number");
}
