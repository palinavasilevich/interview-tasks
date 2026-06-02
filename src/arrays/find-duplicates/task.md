# Find Duplicates

## Problem

Given an array of integers, return `true` if any value appears **more than once**, otherwise return `false`.

## Examples

```js
existsDuplicate([4, 6, 7, 7, 1]);     // true
existsDuplicate([7, 1, 5, 4, 2, 10]); // false
existsDuplicate([1, 2, 3, 1]);         // true
existsDuplicate([]);                   // false
```

## Constraints

- `0 <= numbers.length <= 1000`
- Elements are integers
- Time complexity: O(N)
- Space complexity: O(N)

## Notes

- Brute force is O(n²) — use a Set for O(n) time
- Early exit as soon as the first duplicate is found
