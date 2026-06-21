# Custom Filter

## Problem

Implement `Array.prototype.customFilter` that mirrors the behavior of native `Array.prototype.filter`. The callback receives `(element, index, array)` and the method returns a new array containing only the elements for which the callback returned a truthy value.

## Examples

```js
[1, 2, 3, 4, 5].customFilter((x) => x % 2 === 0);
// [2, 4]

["a", "bb", "ccc"].customFilter((x) => x.length > 1);
// ["bb", "ccc"]

[1, 2, 3].customFilter((x, i) => i > 0);
// [2, 3]

[1, 2, 3].customFilter(() => false);
// []
```

## Constraints

- Must not mutate the original array
- Callback signature: `(element, index, array)`
- No need to support the optional `thisArg` second argument

## Notes

- Native `filter` skips sparse array holes — the `for` loop approach calls the callback for holes with `undefined`, which is an acceptable divergence for interviews
