# Count

## Problem

Implement a `count` function that returns how many times it has been called. It must also have a `count.reset()` method that resets the counter back to zero.

## Examples

```js
count(); // 1
count(); // 2
count(); // 3

count.reset();

count(); // 1
count(); // 2
```

## Notes

- `count` must be a function with a `reset` property — not an object
- The counter state must persist across calls, so it cannot live inside the function body (that would reset on every call)
- An IIFE creates a single shared closure over `amount`; attaching `reset` as a property on the inner function before returning it satisfies both requirements
