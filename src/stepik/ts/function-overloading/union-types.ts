// Task 5 — Overloading with Union Types (Refactoring)
// Bad: Overloading where a union type is sufficient
// function repeat(value: string): string;
// function repeat(value: number): string;
// function repeat(value: string | number): string {
//   if (typeof value === "string") {
//     return value + value;
//   }
//   return String(value) + String(value);
// }

// Rewrite using a union type
// Your code here
function repeat(value: string | number): string {
  if (typeof value === "string") {
    return value + value;
  }

  return String(value) + String(value);
}
