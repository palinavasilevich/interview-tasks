/* Task 3 — Working with Arrays
Create a getItems function that:
- takes an array of numbers and returns the first number
- takes an array of strings and returns the first string
- takes an array and an index and returns the element at that index
 */

// Your signatures and implementation here
// function getItems(arr: number[]): number;
// function getItems(arr: string[]): string;

// function getItems(arr: number[], index: number): number;
// function getItems(arr: string[], index: number): string;

// function getItems(arr: (number | string)[], index?: number) {
//   if (index !== undefined) {
//     return arr[index];
//   }

//   return arr[0];
// }

function getItems<T>(arr: T[], index?: number): T {
  if (index !== undefined) {
    return arr[index];
  }

  return arr[0];
}

// Test:
console.log(getItems([10, 20, 30])); // 10
console.log(getItems(["a", "b", "c"])); // "a"
console.log(getItems([1, 2, 3, 4], 2)); // 3
console.log(getItems(["x", "y", "z"], 1)); // "y"
