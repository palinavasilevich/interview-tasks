# Debounce

## Problem

Implement a `debounce(fn, delay)` function that returns a debounced version of `fn`. The debounced function postpones invoking `fn` until `delay` milliseconds have elapsed since the last time it was called. If called again before the delay expires, the timer resets.

## Examples

```js
const debouncedFn = debounce(fn, 400);

setTimeout(() => debouncedFn(1, "blue"),  0);
setTimeout(() => debouncedFn(2, "green"), 100); // fires at ~500ms  ✓
setTimeout(() => debouncedFn(3, "pink"),  700);
setTimeout(() => debouncedFn(4, "pink"),  1000);
setTimeout(() => debouncedFn(5, "pink"),  1300); // fires at ~1700ms ✓
setTimeout(() => debouncedFn(6, "blue"),  1800);
setTimeout(() => debouncedFn(7, "green"), 1900);
setTimeout(() => debouncedFn(8, "blue"),  2100); // fires at ~2500ms ✓
```

Calls 1, 3, 4, 6, 7 are cancelled — each is followed by another call within 400ms.

## Common use cases

- Search input — fire an API request only after the user stops typing
- Window resize handler — recalculate layout after resize settles

## Notes

- Use a regular `function` (not arrow) for the wrapper to preserve the caller's `this` context via `fn.apply(this, args)`
- `clearTimeout(undefined)` on the first call is a safe no-op — no guard needed
- Production implementations (e.g. Lodash) also expose `.cancel()` and `.flush()` methods
