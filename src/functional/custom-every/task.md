# Custom Every

## Problem

Implement a standalone `every(array, callback)` function and `Array.prototype.customEvery` that mirror the behavior of native `Array.prototype.every`. Return `true` if the callback returns a truthy value for every element, otherwise `false`.

The callback receives `(element, index, array)`.

## Examples

```js
every([1, 2, 3, 4], (x) => x > 0); // true
every([1, 2, 3, 4], (x) => x > 2); // false
every([], () => false);             // true  ← vacuous truth

[1, 2, 3].customEvery((x) => x > 0); // true
[1, 2, 3].customEvery((x) => x > 1); // false
```

## Constraints

- Must short-circuit and return `false` on the first falsy callback result
- Empty array must return `true` (vacuous truth — same as native)
- Callback signature: `(element, index, array)`
- No need to support the optional `thisArg` second argument

## Notes

- Use `!callback(...)` not `=== false` — native `every` checks truthiness, not strict boolean
- Both standalone and prototype versions must explicitly `return true` at the end
