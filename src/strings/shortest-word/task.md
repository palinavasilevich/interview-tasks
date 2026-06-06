# Shortest Word

## Problem

Given a sentence consisting of words separated by spaces, return the length of the shortest word.

## Examples

```ts
shortestWord("lorem ipsum dolor sit amet"); // 3
shortestWord("The quick brown fox");        // 3
shortestWord("hello world");                // 5
shortestWord("I am here");                  // 1
```

## Constraints

- `1 <= str.length <= 10^4`
- Words are separated by single spaces
- Input contains at least one word

## Notes

- V1: map words to their lengths, then use `Math.min(...lengths)` — compact one-liner
- V2: iterate words manually, tracking the shortest length seen so far — avoids spread on large arrays
