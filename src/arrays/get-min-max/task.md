# Get Min Max

## Problem

Given an array of numbers, return a tuple `[min, max]` containing the smallest and largest values.

## Examples

```ts
getMinMax([3, 1, 4, 1, 5, 9, 2, 6]); // [1, 9]
getMinMax([-5, 0, 5]);                // [-5, 5]
getMinMax([7]);                       // [7, 7]
```

## Constraints

- Array contains at least one element
- May contain negative numbers

## Notes

- `Math.min(...numbers)` is concise but uses spread — can cause a stack overflow on very large arrays since all values are pushed onto the call stack; `reduce` is safer for large inputs
- Return type should be `[number, number]` (tuple), not `number[]` — the length is always exactly 2
