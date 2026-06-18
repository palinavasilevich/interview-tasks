# FooBar

## Problem

Given a number `n`, print integers from `1` to `n` with these substitution rules:

- Divisible by both 3 and 5 → print `"fooBar"`
- Divisible by 3 only → print `"foo"`
- Divisible by 5 only → print `"bar"`
- Otherwise → print the number itself

## Examples

```
fooBar(15):
1, 2, foo, 4, bar, foo, 7, 8, foo, bar, 11, foo, 13, 14, fooBar
```

## Constraints

- `1 <= n <= 10^4`

## Notes

- The divisible-by-both check must come first — otherwise numbers like 15 would be caught by the `% 3` or `% 5` branch before reaching the combined check
- `i % 15 === 0` is equivalent to `i % 3 === 0 && i % 5 === 0` and more explicit
