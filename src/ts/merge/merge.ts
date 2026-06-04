export function merge<T, K>(obj1: T, obj2: K): T & K {
  return { ...obj1, ...obj2 };
}
