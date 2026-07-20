# Zip

## Problem

Write a `zip` function that merges the elements of two arrays using a callback function.

### Arguments

- `a` — the first array
- `b` — the second array
- `callback` — a function that takes an element of the first array and an element of the second array, and returns the value for the corresponding element of the resulting array

If the arrays have different lengths, the resulting array's length equals the length of the shorter one — remaining elements of the longer array are ignored.

## Examples

```js
zip([1, 2, 3], [5, 6, 7], (a, b) => a * b);
// [5, 12, 21]

zip(["abc", "f", "qw"], [1, 6, 2, 9, 3], (x, i) => x.repeat(i));
// ["abc", "ffffff", "qwqw"]
```

## Constraints

- The result length must equal the length of the **shorter** input array — indices beyond the shorter array's bounds should not appear in the output
- Must not mutate either input array
- The callback receives `(item1, item2)` for each paired index

## Notes

- Loop bound must be `Math.min(arr1.length, arr2.length)`, not just `arr1.length` — otherwise the callback gets called with `undefined` for the missing items when `arr2` is shorter
