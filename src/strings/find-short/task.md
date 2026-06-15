# Find Short

## Problem

Given a string of words separated by spaces, return the shortest word. If there are multiple words of the same minimum length, return the first one.

## Examples

```ts
findShort("Just test string");  // "Just"
findShort("bitcoin take over"); // "take"  (tie: "take" and "over", first wins)
findShort("a");                 // "a"
```

## Constraints

- Input contains at least one word
- Words are separated by single spaces
- No leading or trailing spaces

## Notes

- `reduce` without an initial value uses the first element as the accumulator — no need to extract `words[0]` manually or track a separate `min` variable
- Sorting is O(n log n) and unnecessary — a single `reduce` pass is O(n)
