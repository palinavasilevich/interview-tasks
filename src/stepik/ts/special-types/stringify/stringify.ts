/*
  Task 1 — any and unknown
  Add a function that accepts a value of any type and returns its string representation. 
  If the value is a string, return it. If the value is a number, 
  return the string representation of the number. 
  If the value is an object, return the string "[object Object]." 
  For null and undefined, return "empty."
 */

export function stringify(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number") {
    return value.toString();
  }

  if (value !== null && typeof value === "object") {
    return "[object Object]";
  }

  return "empty";
}
