# Find Missing Number

## Problem

Given an array of `n` integers containing all numbers from `0` to `n` except one, find and return the missing number.

## Examples

```
Input:  nums = [2, 5, 3, 1]
Output: 4
```

```
Input:  nums = [0, 1, 3]
Output: 2
```

```
Input:  nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
Output: 8
```

## Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= nums.length`
- All numbers in `nums` are unique

## Notes

- Brute force with sort is O(n log n) — aim for O(n) time and O(1) space
- Hint: the sum of numbers from `0` to `n` equals `n * (n + 1) / 2`
