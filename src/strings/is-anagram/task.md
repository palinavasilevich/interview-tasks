# Is Anagram

## Problem

Given two strings, return `true` if they are anagrams of each other (contain the same characters in the same frequencies), otherwise return `false`.

## Examples

```ts
isAnagram("bacd", "cdab");         // true
isAnagram("aaabbaaa", "aaaaaabb"); // true
isAnagram("ababa", "babab");       // false
isAnagram("abc", "ab");            // false
```

## Constraints

- `0 <= a.length, b.length <= 10^4`
- Strings contain lowercase letters only
- Comparison is case-sensitive

## Notes

- Early exit if lengths differ
- O(n log n) approach: sort both strings and compare
- O(n) approach: frequency map — build both maps in one loop, then compare
