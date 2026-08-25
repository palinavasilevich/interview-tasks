// Task 1 — Basic Overload
// Create a calculate function that:
// - takes two numbers and returns their sum
// - takes three numbers and returns their product
// - takes a string and returns its length

// Your signatures and implementation here
function calculate(num1: number, num2: number, num3?: number): number;
function calculate(num: string): number;

function calculate(
  num1: number | string,
  num2?: number,
  num3?: number,
): number {
  if (typeof num1 === "string") {
    return num1.length;
  }

  if (num2 === undefined) {
    throw new Error("Second number is required");
  }

  if (num3 !== undefined) {
    return num1 * num2 * num3;
  }

  return num1 + num2;
}

// Test:
console.log(calculate(5, 3)); // 8
console.log(calculate(2, 3, 4)); // 24
console.log(calculate("hello")); // 5
