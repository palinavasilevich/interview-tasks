# Small Enough

## Problem

Given an array of numbers and a `limit` value, return `true` if every number in the array is less than or equal to `limit`, otherwise return `false`.

## Examples

```ts
smallEnough([1, 2, 3], 5);   // true
smallEnough([-5, 5], 5);     // true
smallEnough([1, 12, 3], 5);  // false
```

## Constraints

- Array may contain negative numbers
- `limit` may be negative
- Empty array returns `true` (vacuous truth — all zero elements satisfy the condition)

## Notes

- `every()` short-circuits on the first violation — no need to iterate the full array
