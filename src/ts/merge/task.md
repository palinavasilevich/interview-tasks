# Merge Objects

## Problem

Implement a generic function `merge` that takes two objects and returns a new object containing all properties from both. If both objects have the same key, the second object's value wins.

## Examples

```ts
merge({ a: 1 }, { b: 2 });
// { a: 1, b: 2 }

merge({ name: "Alice" }, { age: 30 });
// { name: "Alice", age: 30 }

merge({ a: 1, b: 2 }, { b: 99, c: 3 });
// { a: 1, b: 99, c: 3 }
```

## Constraints

- Both arguments are plain objects
- The return type must reflect the merged shape: `T & K`
- Do not mutate either input object

## Notes

- Use generics `<T, K>` so TypeScript infers the correct return type `T & K`
- Spread syntax `{ ...obj1, ...obj2 }` is the idiomatic one-liner
