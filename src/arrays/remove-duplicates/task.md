# Remove Duplicates

## Problem

Given an array of numbers, return a new array with duplicates removed, preserving the original order of first occurrences.

## Examples

```ts
removeDuplicates([1, 2, 3, 1, 2]);       // [1, 2, 3]
removeDuplicates([1, 1, 1]);             // [1]
removeDuplicates([]);                    // []
removeDuplicates([4, 3, 2, 1]);          // [4, 3, 2, 1]
```

## Constraints

- Preserve first-occurrence order
- `0 <= numbers.length <= 10^4`

## Notes

- `[...new Set(numbers)]` is the idiomatic one-liner — `Set` preserves insertion order
- Manual variant with `includes` is O(n²) — `includes` scans the result array on every iteration; use a `Set` for O(1) lookup instead
