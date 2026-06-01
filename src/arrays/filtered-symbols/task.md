# Filtered Symbols

## Problem

Given an array of objects, each with a `value` string, an `order` number, and an `expired` boolean:

1. Ignore expired items
2. Sort the remaining items by `order` ascending
3. Reverse each item's `value` string and concatenate them
4. Return a string of **unique characters** from the result, preserving first-seen order

## Examples

```js
const input = [
  { value: "abcd", order: 4, expired: false },
  { value: "qwer", order: 2, expired: true },
  { value: "xyz1", order: 1, expired: false },
  { value: "abx2", order: 3, expired: false },
];

filteredSymbols(input); // "1zyx2badc"
// sorted (non-expired): xyz1 → abx2 → abcd
// reversed:             1zyx   2xba   dcba
// concatenated: "1zyx2xbadcba"
// unique (first-seen):  "1zyx2badc"
```

## Constraints

- `1 <= arr.length <= 10^4`
- Each `value` contains only alphanumeric characters
- `order` values are unique positive integers

## Notes

- Do not mutate the input array — use `toSorted()` or spread before sorting
- `[...new Set(str.split(""))]` preserves insertion order for deduplication
