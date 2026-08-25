// Task 7 — APIs with Different Data Formats
// Create a createDate function that:
// - accepts a timestamp (a number) and returns a Date
// - accepts a string in the "YYYY-MM-DD" format and returns a Date
// - accepts a year, month, and day and returns a Date

// Your signatures and implementation here

function createDate(timestamp: number): Date;
function createDate(date: string): Date;
function createDate(year: number, month: number, day: number): Date;

function createDate(
  param1: number | string,
  param2?: number,
  param3?: number,
): Date {
  if (
    typeof param1 === "number" &&
    param2 !== undefined &&
    param3 !== undefined
  ) {
    return new Date(param1, param2 - 1, param3);
  }

  return new Date(param1);
}

// Test:
console.log(createDate(1672531200000)); // Date from timestamp
console.log(createDate("2024-03-15")); // Date from string
console.log(createDate(2024, 3, 15)); //
