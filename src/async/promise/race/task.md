# Promise.race

## Problem

Implement `race(promises)` that mirrors the behavior of native `Promise.race`. It takes an iterable (e.g. `Array`, `Set`) and returns a single promise that settles with the value and status of the **first** promise in the iterable to settle.

- If the first to settle **resolves**, the returned promise resolves with that value.
- If the first to settle **rejects**, the returned promise rejects with that reason.
- If the iterable contains plain (non-promise) values, they are treated as already-resolved promises — the first one wins immediately.
- If the iterable is **empty**, the returned promise remains **forever pending** (never settles).

## Examples

```js
// Rejection wins — p3 rejects after 1s, p1 resolves after 2s, p2 resolves after 5s
const p1 = new Promise(r => setTimeout(r, 2000, "🐎"));
const p2 = new Promise(r => setTimeout(r, 5000, "🐢"));
const p3 = new Promise((_, r) => setTimeout(r, 1000, "👻"));

race([p1, p2, p3]).catch(reason => console.log(reason)); // "👻" after 1s

// Resolution wins — p1 resolves after 2s, p3 rejects after 3s
const p1 = new Promise(r => setTimeout(r, 2000, "🐎"));
const p2 = new Promise(r => setTimeout(r, 5000, "🐢"));
const p3 = new Promise((_, r) => setTimeout(r, 3000, "👻"));

race([p1, p2, p3]).then(value => console.log(value)); // "🐎" after 2s

// Plain values — resolves immediately with the first value
race([1, 2, 3]).then(console.log); // 1

// Empty iterable — never settles
race([]); // pending forever
```

## Constraints

- Input is any **iterable** (not necessarily an array) — handle it accordingly
- Must handle plain (non-promise) values in the iterable
- Only the **first** settled promise affects the result; all others are ignored
- Empty iterable must return a **forever-pending** promise

## Notes

- Use `Array.from()` or `for...of` to consume the iterable
- Wrap each item in `Promise.resolve()` to transparently handle plain values
- A `Promise` can only be settled once — calling `resolve`/`reject` after it has already settled is a no-op, so no extra "settled" flag is needed
- Do **not** return `Promise.resolve([])` for an empty input — native `Promise.race([])` never resolves
