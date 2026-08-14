/*
Task 5 — Functions with Callbacks
Create a function that applies an operation to each array element.
*/

export function processArray(
  numbers: number[],
  operation: (num: number) => number | string | boolean,
) {
  return numbers.map(operation);
}
