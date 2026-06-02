# Name Initials

## Problem

Given a full name as a string `"FirstName LastName"`, return the abbreviated form `"F.L."` where each letter is uppercased.

## Examples

```ts
abbrevName("Sam Harris"); // "S.H."
abbrevName("patrick mahomes"); // "P.M."
abbrevName("Evan Cole"); // "E.C."
```

## Constraints

- Input is always in the format `"FirstName LastName"` (exactly two words separated by a single space)
- Input may be any case — output is always uppercase

## Notes

- `str.split(" ")` + destructuring is the idiomatic approach
