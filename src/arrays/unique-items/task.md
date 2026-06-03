# Unique Items

## Problem

Given an array of objects with `id` and `name` fields, return a new array with duplicates removed — keeping only the **first occurrence** of each `id`.

## Examples

```ts
uniq([
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 1, name: "item 3" },
]);
// [{ id: 1, name: "item 1" }, { id: 2, name: "item 2" }]
```

```ts
uniq([
  { id: 3, name: "a" },
  { id: 3, name: "b" },
  { id: 3, name: "c" },
]);
// [{ id: 3, name: "a" }]
```

## Constraints

- `0 <= arr.length <= 10^4`
- `id` is a positive integer
- Preserve the original order of first occurrences

## Notes

- Use a `Set` to track seen IDs and `filter` to keep only first occurrences — O(n) time, O(n) space
