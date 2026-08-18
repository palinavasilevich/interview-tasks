/*
 * Task 9 — Filtering by Type
 *
 * Write a function that takes an array of values ​​and returns only those elements that match
 * specified type.
 */

export function filterByType<T>(arr: T[], guard: (item: T) => item is T): T[] {
  return arr.filter(guard);
}
