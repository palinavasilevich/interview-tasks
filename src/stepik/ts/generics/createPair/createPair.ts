/*
 *Task 13 — Function with Multiple Generics
 *
 * Write a function that accepts two values ​​of different types and returns
 * an object with these values.
 */

function createPair<T, U>(first: T, second: U): { first: T; second: U } {
  return { first, second };
}

// Validation:
const pair1 = createPair(42, "hello"); // { first: number; second: string }
const pair2 = createPair(true, [1, 2, 3]); // { first: boolean; second: number[] }
