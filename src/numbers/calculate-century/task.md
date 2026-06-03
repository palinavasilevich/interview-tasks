# Calculate Century

## Problem

Given a year, return the century it belongs to.

## Examples

```ts
calculateCentury(1705); // 18
calculateCentury(1900); // 19
calculateCentury(1901); // 20
calculateCentury(2000); // 20
calculateCentury(2001); // 21
```

## Constraints

- `1 <= year <= 3000`
- Year is a positive integer

## Notes

- `Math.ceil(year / 100)` handles the boundary years correctly (e.g. year 100 → century 1, year 101 → century 2)
