# Reverse String

## Problem

Given a string, return it reversed.

## Examples

```ts
reverseString("hello");       // "olleh"
reverseString("maxcode.dev"); // "ved.edocxam"
reverseString("abcde");       // "edcba"
reverseString("");            // ""
```

## Constraints

- `0 <= str.length <= 10^4`
- Input may contain any characters

## Notes

- V1: `split("").reverse().join("")` — idiomatic one-liner
- V2: iterate from end to start, building the result manually
