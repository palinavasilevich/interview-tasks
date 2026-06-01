# Currying Sum

## Problem

Implement a `sum` function that supports chained calls, accumulating the total across multiple calls. An empty call (no argument) terminates the chain and returns the accumulated sum.

## Examples

```js
sum(1)(); // 1
sum(1)(2)(); // 3
sum(1)(2)(3)(); // 6
sum(5)(10)(3)(); // 18
sum(0)(5)(); // 5
```

## Constraints

- Each call receives at most one number
- The chain is terminated by calling with no argument: `()`
- Arguments can be any integer including `0` and negative numbers

## Notes

- Each call should return a function that either accumulates further or returns the total
- Avoid using `!b` as the terminator — it incorrectly treats `0` as a stop signal; use `b === undefined`
