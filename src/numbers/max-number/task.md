# Max Number

## Problem

Given an array of numbers, return the largest one.

## Examples

```ts
max([3, 6, 1, 5]);      // 6
max([-3, -1, -2]);      // -1
max([0, 0, 0]);         // 0
max([42]);              // 42
```

## Constraints

- `1 <= numbers.length <= 10^4`
- Numbers can be negative, zero, or positive

## Notes

- V1: `Math.max(...numbers)` — one-liner, but spread can hit call-stack limits on very large arrays
- V2: manual loop initialized from `numbers[0]` — safe and efficient
- V3: `reduce` without a hardcoded initial value — avoids the all-negatives pitfall of using `0` as the seed
