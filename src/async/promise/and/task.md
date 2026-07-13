# Promise.and

## Problem

Implement `and(p1, p2)` — a two-promise "AND" combinator (a specialized, 2-argument version of `Promise.all`). It takes two promises and returns a single promise that:

- **Fulfills** only if **both** `p1` and `p2` fulfill, resolving with a tuple `[v1, v2]` of their values.
- **Rejects** as soon as **either** promise rejects, with that promise's rejection reason — it does **not** wait for the other promise to settle first (short-circuit rejection, same as native `Promise.all`).

## Examples

```js
and(Promise.resolve(1), Promise.resolve(2)).then(
  (values) => console.log(values), // [1, 2]
);

and(Promise.reject("boom"), Promise.resolve(2)).catch(
  (reason) => console.log(reason), // "boom"
);

// Rejection short-circuits — does not wait for the slower promise
const fast = new Promise((_, reject) => setTimeout(reject, 10, "fast fail"));
const slow = new Promise((resolve) => setTimeout(resolve, 1000, "slow ok"));

and(fast, slow).catch((reason) => console.log(reason)); // "fast fail" after ~10ms
```

## Constraints

- Both arguments are promises (no need to handle plain values or iterables).
- Only the first rejection (in time, not argument order) should reject the result.
- Implement the combinator logic manually — don't just delegate to `Promise.all`, since the point of the exercise is to practice tracking promise settlement by hand (same spirit as the sibling `race` and `promise-all` tasks in this repo).

## Notes

- Track fulfillment of both promises with a counter (or two flags) and resolve once both have landed.
- Attach a rejection handler to each promise individually so that whichever rejects first immediately rejects the result.
