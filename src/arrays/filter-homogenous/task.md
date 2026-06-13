# Filter Homogenous Arrays

## Problem

Given an array of arrays, return only the sub-arrays where **all elements share the same type** (as determined by `typeof`).

Empty sub-arrays must be excluded.

## Examples

```js
filterHomogenous([[1, 2, 3], [], [5, true, 8], ["qwe", "yyy"], ["uio", 6]]);
// [[1, 2, 3], ["qwe", "yyy"]]
```

```js
filterHomogenous([[], [1], ["a", "b"], [true, 1]]);
// [[1], ["a", "b"]]
```

## Constraints

- `0 <= arrays.length <= 10^4`
- Sub-arrays may contain values of any type: `number`, `string`, `boolean`, `object`, etc.
- An empty sub-array is not considered homogenous

## Notes

- Use `typeof` for type checking — no need to distinguish `null` from other objects
- `Array.prototype.every()` short-circuits on the first mismatch
