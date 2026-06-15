# Bingo

## Problem

You are given a bingo ticket — an array of pairs `[string, number]`. For each pair, check whether any character in the string has a char code equal to the number. Count how many pairs are "winning" and return that count.

## Examples

```ts
bingo([
  ["ABC", 65],  // 'A'.charCodeAt(0) === 65 ✓
  ["HGR", 74],  // 'J'.charCodeAt(0) === 74, but 'J' not in "HGR" ✗
  ["BYHT", 89], // 'Y'.charCodeAt(0) === 89 ✓
]); // 2
```

## Constraints

- Each pair is `[string, number]` where string contains uppercase Latin letters
- A pair is winning if **any** character in the string matches the number as a char code
- Return the total count of winning pairs

## Notes

- `'A'.charCodeAt(0) === 65`, `'Z'.charCodeAt(0) === 90` — uppercase Latin range is 65–90
- The manual flag + `break` loop is just `some()` written by hand — prefer `[...str].some(c => c.charCodeAt(0) === num)`
- Destructure the tuple in the `reduce` callback: `([str, num])` instead of `(arr)` then `const [str, num] = arr`
