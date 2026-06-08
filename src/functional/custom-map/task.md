# Custom Map

## Problem

Implement `customMap(array, callback)` that mirrors the behavior of native `Array.prototype.map`. The callback receives `(element, index, array)` and the function returns a new array of transformed values without modifying the original.

Also implement it as `Array.prototype.customMap` so it can be called directly on any array.

## Examples

```js
customMap([1, 2, 3], (x) => x ** 2);
// [1, 4, 9]

customMap(["a", "b", "c", "d"], (x, i) => x.repeat(i));
// ["", "b", "cc", "ddd"]

[1, 2, 3].customMap((x) => x ** 2);
// [1, 4, 9]
```

## Constraints

- Must not mutate the original array
- Callback signature: `(element, index, array)`
- No need to support the optional `thisArg` second argument

## Notes

- Standalone version takes `(array, callback)` as arguments
- Prototype version uses `this` instead of the array parameter
- Native `map` skips sparse array holes — the `for` loop approach calls the callback for holes with `undefined`, which is an acceptable divergence for interviews
