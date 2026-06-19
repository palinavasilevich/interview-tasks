# Century

## Problem

Given a year, return the century it belongs to. The first century spans years 1–100, the second 101–200, and so on.

## Examples

```ts
century(1);    // 1
century(100);  // 1
century(101);  // 2
century(1999); // 20
century(2000); // 20
century(2001); // 21
```

## Constraints

- `1 <= year <= 10^5`
- Input is a positive integer

## Notes

- `Math.ceil(year / 100)` handles the boundary correctly — year 100 gives `ceil(1.0) = 1`, year 101 gives `ceil(1.01) = 2`
- Integer division `Math.floor((year - 1) / 100) + 1` is an equivalent alternative
