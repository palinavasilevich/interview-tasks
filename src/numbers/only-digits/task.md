# Only Digits

## Problem

Given a string, return `true` if it consists **only of digit characters** (`0`–`9`), and `false` otherwise.

An empty string returns `false`.

## Examples

```ts
onlyDigits("123");   // true
onlyDigits("0");     // true
onlyDigits("qwerty") // false
onlyDigits("5!");    // false
onlyDigits("2e2");   // false
onlyDigits("1 2");   // false
onlyDigits("");      // false
```

## Constraints

- Input is always a string
- Whitespace, punctuation, and letters must return `false`

## Notes

- Regex `/^\d+$/` is the idiomatic solution — `^` and `$` anchor to the full string, `\d+` requires one or more digit characters
- Avoid `Number(char)` for per-character checks — `Number(" ")` returns `0` (not `NaN`), so whitespace passes the `!isNaN` test incorrectly
