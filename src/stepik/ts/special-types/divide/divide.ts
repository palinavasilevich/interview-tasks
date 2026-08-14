/*
 * Task 2 - never in unreachable code
 * Add a function that throws an error message, use never for the return type.
 */

function throwError(message: string): never {
  throw new Error(message);
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throwError("Division by zero!");
  }

  return a / b;
}
