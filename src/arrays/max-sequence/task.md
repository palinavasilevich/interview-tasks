# Max Sequence (Maximum Subarray Sum)

## Problem

Given an array of integers, find the maximum sum of any contiguous subarray. If all elements are negative, return `0` (empty subarray).

## Examples

```ts
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6  → [4, -1, 2, 1]
maxSequence([-13, 46, -32]);                    // 46 → [46]
maxSequence([-3, -2, -1]);                      // 0  → [] (empty)
maxSequence([]);                                // 0
```

## Constraints

- Array may contain negative numbers
- Empty subarray (sum = 0) is valid — never return a negative result
- `0 <= arr.length <= 10^5`

## Notes

- **Brute force O(n²)**: try every start/end pair — correct but too slow for large inputs
- **Kadane's algorithm O(n)**: at each element, either extend the current subarray or start fresh — `current = Math.max(0, current + num)`; resetting to 0 handles the "empty subarray" case naturally
- The commented suffix-sum approach (`totalSum - rest`) finds the maximum suffix, not the maximum subarray — a different problem
