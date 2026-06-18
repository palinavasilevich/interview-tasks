# Unite Unique

## Problem

Given any number of arrays, return a single array of unique values from all arrays combined, preserving first-occurrence order.

## Examples

```ts
uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]); // [1, 2, 3, 4, 5, 6, 7, 8]
uniteUnique([1, 1, 1], [2, 2, 2]);                 // [1, 2]
uniteUnique([1]);                                   // [1]
```

## Constraints

- Accepts a variadic number of arrays via rest params
- Preserve first-occurrence order across all arrays
- `0 <= total elements <= 10^4`

## Notes

- `arrays.flat()` merges all arrays into one before deduplication
- `Set.add` is idempotent — no need for a `has` check before calling it
- Rest param type: `...arrays: number[][]` and `...arrays: Array<number[]>` are equivalent
