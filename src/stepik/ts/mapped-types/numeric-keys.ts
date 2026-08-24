// Task 5 — Numeric Keys

type NumberArray = {
  [index: number]: number;
};

// Validation:
const arr: NumberArray = [10, 20, 30, 40];
arr[0] = 5;
// arr[1] = "50"; // Error, cannot assign to a string
