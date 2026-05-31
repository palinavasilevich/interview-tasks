# Odd Sort

## Problem

Given an array of integers, sort **only the odd numbers** in place while keeping the even numbers at their original positions.

## Examples

```
Input:  [2, 3, 7, 4, 6, 1, 5, 8, 9]
Output: [2, 1, 3, 4, 6, 5, 7, 8, 9]
//          ^  ^        ^  ^     ^  — odds sorted, evens unchanged
```

```
Input:  [5, 3, 2, 8, 1, 4]
Output: [1, 3, 2, 8, 5, 4]
```

```
Input:  [1, 2, 3]
Output: [1, 2, 3]
```

## Constraints

- `1 <= arr.length <= 10^4`
- `-10^9 <= arr[i] <= 10^9`
- Even numbers stay at their original indices

## Notes

- Collect odd numbers and their indices, sort the odds, put them back
- Time O(n log n), Space O(n)
