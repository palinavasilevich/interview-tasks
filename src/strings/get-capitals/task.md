# Get Capitals

## Problem

Given a string, return an array of indices where uppercase letters appear.

## Examples

```ts
getCapitals("CodEWaRs"); // [0, 3, 4, 6]
getCapitals("hello");    // []
getCapitals("Hello World"); // [0, 6]
```

## Constraints

- Input may contain any characters (letters, digits, spaces, punctuation)
- Return indices of uppercase Latin letters only
- Return an empty array if none found

## Notes

- `char === char.toUpperCase()` is a common mistake — digits and punctuation also satisfy this condition since they have no uppercase form; use `/[A-Z]/.test(char)` instead
- `reduce` that conditionally pushes indices is the right pattern — `filter` then `map` would lose the original index after filtering
