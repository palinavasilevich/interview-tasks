# Find Capitals

## Problem

Given a string, return an array of indices where uppercase letters appear.

## Examples

```ts
findCapitals("MaxCode");  // [0, 3]
findCapitals("hello");    // []
findCapitals("Hello World"); // [0, 6]
```

## Constraints

- Input may contain any characters (letters, digits, spaces, punctuation)
- Return indices of uppercase Latin letters only
- Return an empty array if none found

## Notes

- `char.toUpperCase() === char` is a common mistake — digits, spaces, and punctuation have no case, so they also satisfy this comparison (`"1".toUpperCase() === "1"` is `true`). Use `/[A-Z]/.test(char)` instead so only actual uppercase letters count.
- Current `solution.js` uses the `toUpperCase()` comparison, so `findCapitals("a1 b!c")` wrongly returns `[1, 2, 4]` (digit, space, and `!` all get flagged) instead of `[]`.
- See the sibling task [get-capitals](../get-capitals/task.md), which covers the same problem and documents the same pitfall — worth comparing solutions.
