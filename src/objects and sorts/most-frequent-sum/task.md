# Самая частая сумма / Most Frequent Sum

## Problem

Given two non-empty arrays of equal length, pair up elements by index and compute each pair's sum. Find the sum that appears most frequently and return all pairs that produce it.

If multiple sums share the highest frequency, return the pairs for the **larger** sum.

## Examples

```ts
mostFrequentSum(
  [3, 1, 0, 1, 4, 1, 2, 2],
  [1, 2, 3, 1, 0, 5, 1, 2]
);
// Pairs:  4  3  3  2  4  6  3  4
// Sum 4 → 3 times, Sum 3 → 3 times — tied, 4 > 3 → pick sum 4
// → [[3, 1], [4, 0], [2, 2]]
```

## Constraints

- Both arrays are non-empty and always have the same length
- On a tie in frequency, return the pairs for the **higher sum**

## Notes

- Use a `Map<number, number[][]>` to group pairs by their sum
- Track both `maxCount` and `maxSumKey` — on equal count, prefer the larger key:
  `value.length > maxCount || (value.length === maxCount && key > maxSumKey)`
- Confusing `maxCount` (frequency) with the sum key itself is a common bug here
