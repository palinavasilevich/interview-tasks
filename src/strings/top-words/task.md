# Top Words

## Problem

Given a sorted list of words, a query string, and a limit, return the first `limit` words that start with the query (case-insensitive).

## Examples

```ts
topWords(words, "Af", 3);  // ["Affect", "AFFORD", "after"]
topWords(words, "aga", 5); // ["again", "against"]
topWords(words, "ab", 2);  // ["able", "about"]
```

## Constraints

- Words are pre-sorted alphabetically
- Matching is case-insensitive
- Return at most `limit` results
- If fewer than `limit` words match, return all matches

## Notes

- V1: manual loop with early exit once `limit` results are collected — avoids scanning the rest of the array
- V2: `filter().slice(limit)` — cleaner but always scans the full array even after enough matches are found
