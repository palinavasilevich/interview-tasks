/*
 * Task 11 — Skip the First N Elements
 *
 * Write a function that takes an array and a number N and returns a new array without
 * the first N elements.
 */

export function skip<T>(arr: T[], n: number): T[] {
  return arr.slice(n);
}
