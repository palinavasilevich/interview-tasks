# Find Average

## Problem

Given an array of numbers, return the average (arithmetic mean). If the array is empty, return `0`.

## Examples

```ts
findAverage([1, 2, 3, 4]); // 2.5
findAverage([1, 1, 1]);    // 1
findAverage([]);            // 0
```

## Constraints

- May contain negative numbers
- Empty array returns `0`

## Notes

- Guard against empty array before dividing — `numbers.length === 0` would otherwise produce `NaN`
- `reduce` with initial value `0` handles the single-element case correctly
