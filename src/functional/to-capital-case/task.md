# To Capital Case

## Problem

Given a string of space-separated words, return a new string where the first letter of every word is uppercased and the rest are lowercased.

## Examples

```ts
toCapitalCase("hello world");       // "Hello World"
toCapitalCase("HELLO WORLD");       // "Hello World"
toCapitalCase("the quick brown fox"); // "The Quick Brown Fox"
toCapitalCase("");                  // ""
toCapitalCase("a");                 // "A"
```

## Constraints

- Words are separated by spaces
- The entire string is lowercased first, then each word's first letter is uppercased
- Empty string should return an empty string

## Notes

- `split(" ")` can produce empty strings on consecutive spaces — guard against `word[0]` being `undefined`
- Alternative: `str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())`
