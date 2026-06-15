# Is Palindrome

## Problem

Given a string, return `true` if it reads the same forwards and backwards (case-insensitive), otherwise return `false`.

## Examples

```ts
isPalindrome("racecar"); // true
isPalindrome("Racecar"); // true
isPalindrome("hello");   // false
isPalindrome("A");       // true
isPalindrome("");        // true
```

## Constraints

- Comparison is case-insensitive
- Input contains only ASCII characters
- Empty string is considered a palindrome

## Notes

- Normalize to lowercase first, then compare against its reverse
- `str.split("").reverse().join("")` is the idiomatic one-liner for reversing a string in JS/TS
- Two-pointer approach (`left++, right--`) is O(1) space vs O(n) for the reverse copy — both are O(n) time
