# Masking Card Number

## Problem

Given a credit card number string, return a masked version where all characters except the **last 4** are replaced with `#`. The total length must be preserved.

## Examples

```ts
maskingCardNumber("1234567890123456"); // "############3456"
maskingCardNumber("1234123412341234"); // "############1234"
maskingCardNumber("123456789012");     // "########9012"
```

## Constraints

- Input length is at least 4
- Input contains only digit characters

## Notes

- `slice(-4)` + `padStart(length, "#")` is the idiomatic one-liner
