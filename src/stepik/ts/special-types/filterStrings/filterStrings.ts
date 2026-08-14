/*
 * Task 6: never and recursive check
 *
 * Write a function that takes an array of unknown values ​​and returns a new array containing
 * only string. If the array contains a non-string value, throw an error using never.
 */
export function filterStrings(values: unknown[]): string[] {
  const result: string[] = [];

  for (const value of values) {
    if (typeof value !== "string") {
      throw new Error(`Incorrect value: ${value}`);
    }

    result.push(value);
  }

  return result;
}
