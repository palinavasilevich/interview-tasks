# Currying Sum

## Problem

Implement a `sum` function that can be called with chained arguments and returns the accumulated total. Each call adds the next number, and the chain can be of any length.

The returned value must be usable in numeric contexts (comparison, arithmetic, logging).

## Examples

```js
sum(1)(2)(3);        // 6
sum(1)(2)(3) == 6;   // true
+sum(1)(2)(3);       // 6

sum(5);              // 5
sum(1)(2);           // 3
sum(0)(0)(0)(5);     // 5
```

## Constraints

- Must support chains of any length
- Must work in numeric contexts (`==`, `+`, `console.log`)

## Notes

- Each call returns a function (enabling further chaining), not a plain number
- Overriding `valueOf` on the returned function allows JavaScript's implicit type coercion to produce the accumulated value in numeric contexts
- `==` triggers `valueOf`; `===` does not — so `sum(1)(2) === 3` is `false`
