// Task 6 — Overloading with Generics (Refactoring)
// Bad: Overloading for every type
// function reverseArray(items: number[]): number[];
// function reverseArray(items: string[]): string[];
// function reverseArray(items: boolean[]): boolean[];
// function reverseArray(items: any[]): any[] {
//   return [...items].reverse();
// }

// Rewrite using generics
// Your code here
function reverseArray<T>(items: T[]): T[] {
  return [...items].reverse();
}
