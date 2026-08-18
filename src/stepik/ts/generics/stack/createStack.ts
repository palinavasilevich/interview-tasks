/*
 * Task 8 — Stack
 *
 * Create a createStack function that returns an object for working with a stack.
 * All methods must be type-safe.
 */

export function createStack<T>() {
  const items: T[] = [];

  return {
    push: (item: T): void => {
      items.push(item);
    },
    pop: (): T | undefined => {
      return items.pop();
    },
    peek: (): T => {
      return items[items.length - 1];
    },
    isEmpty: (): boolean => {
      return items.length === 0;
    },
  };
}
