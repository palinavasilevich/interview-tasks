# Flatten

## Problem

Implement a `flatten` function that takes a deeply nested array and returns a new single-level array containing all the values.

## Examples

```js
flatten([1, 2, 3]);                    // [1, 2, 3]
flatten([1, [2, 3]]);                  // [1, 2, 3]
flatten([[1, 2], [3, 4]]);             // [1, 2, 3, 4]
flatten([1, [2, [3, [4, [5]]]]]);      // [1, 2, 3, 4, 5]
flatten([]);                           // []
```

## Constraints

- Must flatten to any depth, not just one level
- Must not mutate the input array
- Non-array values at any level are included as-is

## Notes

- Recursive inner function with a shared `result` closure avoids rebuilding arrays on each recursive call
- Alternative one-liner: `value.flat(Infinity)` — but the point of the task is to implement it manually
- For very deeply nested inputs, recursion can hit the call stack limit — acceptable trade-off for interviews
