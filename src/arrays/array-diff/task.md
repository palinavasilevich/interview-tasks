# Array Diff

## Problem

Given two arrays of numbers, remove all values from the first array that appear in the second array. Return the remaining elements in their original order.

Duplicates in `arr1` are preserved — only their presence in `arr2` determines removal.

## Examples

```ts
arrayDiff([1, 2, 3, 4, 5, 6], [4, 6, 8, 0]);          // [1, 2, 3, 5]
arrayDiff([3, 1, 1, 1, 1, 2, 2, 2], [4, 4, 2, 7, 8, 8]); // [3, 1, 1, 1, 1]
```

## Constraints

- Arrays may contain duplicates
- Values in `arr2` that don't appear in `arr1` are ignored
- Frequency of values in `arr2` does not matter — presence is all that counts

## Notes

- Use a `Set` from `arr2` for O(1) membership lookup — a `Map` with counts is unnecessary since frequency is irrelevant
- Time: O(n + m), Space: O(m) where n = `arr1.length`, m = `arr2.length`
