# Once

## Problem

Implement a `once(fn)` higher-order function that returns a wrapper which calls `fn` only on the first invocation. All subsequent calls return `undefined`.

## Examples

```js
const onceSum = once((a, b) => a + b);

onceSum(2, 3); // 5
onceSum(5, 6); // undefined
onceSum(1, 1); // undefined

const onceDouble = once((a) => a * 2);

onceDouble(3); // 6
onceDouble(5); // undefined
```

## Notes

- The wrapper must be a regular function (not an arrow function) so that `this` is correctly forwarded via `fn.apply(this, args)` when wrapping methods
- Arrow functions capture `this` lexically — using one as the wrapper breaks method use cases
