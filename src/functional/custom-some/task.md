# Custom Some

## Problem

Implement `Array.prototype.customSome` that mirrors the behavior of native `Array.prototype.some`. The callback receives `(element, index, array)` and the method returns `true` if at least one element satisfies the predicate, otherwise `false`.

## Examples

```js
[1, 2, 3].customSome((x) => x > 2);
// true

[1, 2, 3].customSome((x) => x > 5);
// false

["a", "b", "c"].customSome((x, i) => i === 1);
// true

[].customSome((x) => x > 0);
// false
```

## Constraints

- Return `true` as soon as a match is found — do not iterate further
- Callback signature: `(element, index, array)`
- No need to support the optional `thisArg` second argument

## Notes

- Native `some` returns `false` for empty arrays — the loop simply never executes
- Native `some` short-circuits on the first truthy callback result; the `for` loop with an early `return` achieves the same
