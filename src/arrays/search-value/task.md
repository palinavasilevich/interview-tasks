# Search Value

## Problem

Given a 2D matrix of strings and a minimum length `min`, return `true` if any word in the matrix has a length greater than or equal to `min`, otherwise return `false`.

## Examples

```ts
const matrix = [
  ["lorem", "ipsum", "dolor", "sit", "amet"],
  ["consectetur", "adipiscing", "elit", "mauris", "urna"],
  ["mauris,", "accumsan", "quis", "mauris", "in"],
];

searchValue(matrix, 6);   // true  ("consectetur" length 11 >= 6)
searchValue(matrix, 11);  // true  ("consectetur" length 11 >= 11)
searchValue(matrix, 200); // false (no word is that long)
```

## Constraints

- `1 <= matrix.length <= 100`
- `1 <= matrix[i].length <= 100`
- `1 <= min <= 10^4`

## Notes

- V1: nested `for...of` loop — short-circuits on first match, no extra allocations
- V2: flattens matrix first, then searches — correct but allocates an extra array and delays short-circuiting
- Best functional alternative: `matrix.some(row => row.some(word => word.length >= min))` — short-circuits like V1 with no allocations
