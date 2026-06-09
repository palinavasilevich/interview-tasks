# Promise.allSettled

## Problem

Implement `allSettled(promises)` that mirrors the behavior of native `Promise.allSettled`. It takes an array of promises (or plain values) and returns a single promise that:
- **Always resolves** (never rejects) once every input promise has settled.
- Resolves with an array of result descriptors in the same order as the input, where each descriptor is either:
  - `{ status: "fulfilled", value }` — if the promise resolved
  - `{ status: "rejected", reason }` — if the promise rejected

## Examples

```js
allSettled([
  Promise.resolve(1),
  Promise.reject(new Error("fail")),
  Promise.resolve(3),
]).then(console.log);
// [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected",  reason: Error: fail },
//   { status: "fulfilled", value: 3 },
// ]

allSettled([]); // resolves with []

allSettled([1, 2, 3]);
// [
//   { status: "fulfilled", value: 1 },
//   { status: "fulfilled", value: 2 },
//   { status: "fulfilled", value: 3 },
// ]
```

## Constraints

- Must **never reject** — rejections from individual promises are captured as `{ status: "rejected", reason }` descriptors
- Must preserve input order in the results array regardless of settlement order
- Must handle plain (non-promise) values in the input array
- Empty array input must resolve immediately with `[]`

## Notes

- Use `results[index] = descriptor` (not `push`) to preserve order — promises can settle in any order
- Wrap each item in `Promise.resolve()` to transparently handle plain values
- Use `.finally()` (or a shared handler) to decrement the counter — it fires on both fulfillment and rejection
- Unlike `Promise.all`, there is no early-exit path; the outer promise only ever resolves
