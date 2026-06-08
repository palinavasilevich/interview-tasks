# Flatten Array

## Problem

Implement `flattenArr(arr, depth)` that flattens a nested array up to the given depth level. Mirrors the behavior of native `Array.prototype.flat(depth)`.

## Examples

```js
flattenArr([1, [2, [3, [4]]]], 1); // [1, 2, [3, [4]]]
flattenArr([1, [2, [3, [4]]]], 2); // [1, 2, 3, [4]]
flattenArr([1, [2, [3, [4]]]], Infinity); // [1, 2, 3, 4]
flattenArr([1, [2], [3, [4]]], 0); // [1, [2], [3, [4]]]
flattenArr([1, 2, 3], 1); // [1, 2, 3]
```

## Constraints

- `depth >= 0` (0 returns a shallow copy, no flattening)
- Elements can be any type including nested arrays
- `depth` may be `Infinity` for full flattening

## Notes

- V1: recursive — decrement depth on each level; clean and direct
- V2: iterative with explicit stack — avoids call stack limits on very deeply nested input
- V2 uses `shift`/`unshift` (O(n) each); prefer `pop`/`push` with reversed children for O(1) stack ops
