/* Task 8 — Complex Overloading
   Create a format function that:
    - takes a number and returns a string with two decimal places
    - takes a number and a boolean flag (rounding) — if true, returns an integer
    - takes a string and returns it in uppercase
    - takes a string and a number (maximum length) — truncates the string to the specified length
 */
// Your signatures and implementation here
function format(value: number): string;
function format(value: number, isRound: boolean): string;
function format(value: string): string;
function format(value: string, maxLength: number): string;

function format(value: number | string, param2?: boolean | number): string {
  if (typeof value === "number") {
    if (param2 === undefined) {
      return value.toFixed(2);
    }

    if (param2 === true) {
      return String(Math.round(value));
    }
  }

  if (typeof value === "string") {
    if (param2 === undefined) {
      return value.toUpperCase();
    }

    if (typeof param2 === "number") {
      return value.slice(0, param2);
    }
  }

  throw new Error("Invalid arguments");
}

// Test:
console.log(format(42.5678)); // "42.57"
console.log(format(42.5678, true)); // "43"
console.log(format("hello")); // "HELLO"
console.log(format("hello world", 5)); // "hello"
