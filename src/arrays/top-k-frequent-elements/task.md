# Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. The answer may be returned in any order.

## Example

```
Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]

Input:  nums = [1], k = 1
Output: [1]
```

## Approach

1. Build a frequency map by iterating over `nums`.
2. Sort the entries by frequency in descending order.
3. Take the first `k` entries and return their keys.

**Time complexity:** O(n log n) — dominated by the sort  
**Space complexity:** O(n) — for the frequency map

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is in the range `[1, number of unique elements]`
- The answer is guaranteed to be unique
