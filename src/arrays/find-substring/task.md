# Find Substring

## Problem

Given a substring and an array of strings, return a new array containing only the strings that **include** the substring.

## Examples

```ts
findSubstring("oo", ["food", "door", "moon"]); // ["food", "door", "moon"]
findSubstring("xyz", ["apple", "banana", "cherry"]); // []
findSubstring("an", ["apple", "banana", "mango"]); // ["banana", "mango"]
```

## Constraints

- `0 <= arr.length <= 10^4`
- Matching is case-sensitive
- Preserve the original order of matched strings

## Notes

- `Array.filter` + `String.includes` is the idiomatic one-liner
