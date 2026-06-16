# Sum Digits

## Problem

Given an integer, return the sum of its digits. Negative numbers are treated the same as positive — the sign is ignored.

## Examples

```ts
sumDigits(123);  // 6   → 1 + 2 + 3
sumDigits(-123); // 6   → 1 + 2 + 3
sumDigits(0);    // 0
sumDigits(999);  // 27
```

## Constraints

- Input is an integer (positive, negative, or zero)
- Ignore the sign — treat negative numbers as their absolute value

## Notes

- `Math.abs` handles the sign before converting to string
- `Number(c)` and `+c` are both valid for converting a digit character to a number
