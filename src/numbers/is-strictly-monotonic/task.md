# Is Strictly Monotonic

## Problem

Массив называется **строго монотонным**, если он является строго возрастающим (каждый элемент больше предыдущего) или строго убывающим (каждый элемент меньше предыдущего).

Реализуйте функцию, проверяющую, что массив строго монотонный.

## Examples

```ts
isStrictlyMonotonic([1]);           // true
isStrictlyMonotonic([1, 7, 10]);    // true  — strictly increasing
isStrictlyMonotonic([-6, -10, -777]); // true  — strictly decreasing
isStrictlyMonotonic([5, 7, 7, 9]);  // false — equal elements
isStrictlyMonotonic([1, 3, 2]);     // false — changes direction
isStrictlyMonotonic([3, 1, 2]);     // false — changes direction
```

## Constraints

- `0 <= numbers.length <= 10^4`
- Elements are integers

## Notes

- V1: two `every` passes (strictly increasing OR strictly decreasing) — O(n), clear intent
- V2: determine direction from first pair, then verify all subsequent pairs in one pass — O(n), O(1) space
- Avoid checking only "peaks" — it misses "valley" patterns like `[3, 1, 2]`
