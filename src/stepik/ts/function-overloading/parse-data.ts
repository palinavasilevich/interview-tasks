// Task 2 — Overloading with Different Return Types
// Create a parseData function that:
// - accepts a string and returns an object { type: "text", content: string }
// - accepts a number and returns an object { type: "number", value: number }
// - accepts a boolean and returns an object { type: "boolean", value: boolean }

// Your signatures and implementation here
function parseData(value: string): { type: "text"; content: string };
function parseData(value: number): { type: "number"; value: number };
function parseData(value: boolean): { type: "boolean"; value: boolean };

function parseData(value: string | number | boolean) {
  if (typeof value === "string") {
    return { type: "text", content: value };
  }

  if (typeof value === "number") {
    return { type: "number", value };
  }

  if (typeof value === "boolean") {
    return { type: "boolean", value };
  }
}

// Test:
console.log(parseData("hello")); // { type: "text", content: "hello" }
console.log(parseData(42)); // { type: "number", value: 42 }
console.log(parseData(true)); // { type: "boolean", value: true }
