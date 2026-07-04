# Times

## Problem

Implement `Number.prototype.times` that calls a callback `n` times, passing the current index (0-based) on each call.

## Examples

```js
(3).times(console.log);
// 0
// 1
// 2

(0).times(console.log);
// (nothing)
```

## Constraints

- Index is 0-based: runs from `0` to `n - 1`
- Calling on `0` is a no-op

## Notes

- Inside the prototype method, `this` is a boxed `Number` object — comparisons like `i < this` still work due to implicit coercion, but `typeof this === "number"` would be `false`
