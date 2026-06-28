# Promise Sum

## Problem

Implement a `sum` function that takes two promises, waits for both to resolve, and returns a new promise that resolves with their sum.

## Examples

```js
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

sum(p1, p2).then(console.log); // 3
```

## Constraints

- Both promises must be awaited in parallel, not sequentially
- If either promise rejects, the returned promise must also reject

## Notes

- Avoid the Promise constructor anti-pattern — wrapping `Promise.all` in `new Promise` is unnecessary and hides rejections if only `resolve` is passed
- `Promise.all([p1, p2])` runs both in parallel and rejects immediately if either rejects
