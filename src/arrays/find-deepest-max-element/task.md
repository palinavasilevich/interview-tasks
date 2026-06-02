# Find Deepest Max Element

## Problem

Given a deeply nested array of integers, find the maximum number among all elements at the **deepest nesting level**.

## Examples

```js
findDeepestMaxElement([1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]]);
// 102
// deepest level (4): 101, 102, 100 → max is 102
```

```js
findDeepestMaxElement([10, [5, [15, [50]], 20]]);
// 50
// deepest level (4): 50 → only element
```

```js
findDeepestMaxElement([3, [1, 2]]);
// 2
// deepest level (2): 1, 2 → max is 2
```

## Constraints

- The input is a non-empty nested array
- Leaf values are integers (can be negative)
- Nesting depth is at least 1

## Notes

- Pass `depth` as a parameter to the recursive function — avoid shared mutable depth state
- Store `{ depth, value }` pairs to handle duplicate values correctly
- Watch out for negative-only inputs — don't use `0` as the initial max
