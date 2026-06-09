# Promise.all

## Problem

Implement `promiseAll(promises)` that mirrors the behavior of native `Promise.all`. It takes an array of promises (or plain values) and returns a single promise that:
- **Resolves** with an array of results in the same order as the input, once all promises resolve.
- **Rejects** immediately with the reason of the first promise that rejects.

## Examples

```js
promiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(console.log); // [1, 2, 3]

promiseAll([
  Promise.resolve("A"),
  Promise.reject(new Error("fail")),
  Promise.resolve("C"),
]).catch(console.error); // Error: fail

promiseAll([]); // resolves with []

promiseAll([1, 2, 3]); // resolves with [1, 2, 3] (plain values allowed)
```

## Constraints

- Must preserve input order in the results array regardless of resolution order
- Must handle plain (non-promise) values in the input array
- Empty array input must resolve immediately with `[]`

## Notes

- Use `results[index] = result` (not `push`) to preserve order — promises can resolve in any order
- Wrap each item in `Promise.resolve()` to transparently handle plain values
- Pass `reject` directly as the second `.then` argument — no wrapper needed
- Once a `Promise` resolves/rejects, further calls to `resolve`/`reject` are no-ops, so duplicate rejections are safe
