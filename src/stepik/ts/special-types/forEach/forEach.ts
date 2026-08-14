/*
 * Task 3 — void in functions
 */

export function forEach<T>(
  items: T[],
  callback: (item: T, index: number) => void,
): void {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], i);
  }
}

forEach([1, 2, 3], (item, index) => {
  console.log(`Item ${index}: ${item}`);
});

forEach(["a", "b"], (item) => item.toUpperCase());
