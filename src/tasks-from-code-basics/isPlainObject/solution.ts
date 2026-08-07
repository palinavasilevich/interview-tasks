export function isPlainObject(value: unknown): boolean {
  return value instanceof Object && !Array.isArray(value);
}

isPlainObject(1); // false
isPlainObject("hexlet"); // false
isPlainObject({}); // true
isPlainObject({ name: "code-basics" }); // true
isPlainObject([1, 8]); // false
