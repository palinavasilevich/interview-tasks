# Pivot Index

## Problem

Given an array of numbers, find the **pivot index** — the index where the sum of all elements to its left equals the sum of all elements to its right.

- Elements outside the array boundaries are treated as sum `0`
- If multiple pivot indices exist, return the **minimum** one
- If no pivot index exists, return `-1`

## Examples

```ts
//              0  1  2  3  4  5  6
pivotIndex([4, 2, 1, 3, 7, 6, 4]); // 4
// left of index 4:  4 + 2 + 1 + 3 = 10
// right of index 4: 6 + 4 = 10

pivotIndex([4, 2, -5, 3]); // 0
// left of index 0: 0 (no elements)
// right of index 0: 2 + (-5) + 3 = 0

pivotIndex([1, 2, 3]); // -1

pivotIndex([1]); // 0
```

## Constraints

- Array may contain negative numbers
- Array may be empty — return `-1`
- Single-element array always returns `0`

## Notes

- **O(n²) approach**: track `leftSum` as you iterate; compute `rightSum` via `slice + reduce` each step — correct but wasteful
- **O(n) approach**: precompute `totalSum`, then at each index check `leftSum === totalSum - leftSum - arr[i]` — eliminates the inner loop entirely
- A Map keyed by value does not work — duplicate values in the array corrupt the mapping
