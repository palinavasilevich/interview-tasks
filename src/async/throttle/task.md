# Throttle

## Problem

Implement a `throttle(fn, delay)` function that returns a throttled version of `fn`. The throttled function ensures `fn` is called at most once per `delay` milliseconds, regardless of how many times it is invoked.

## Examples

```js
const throttled = throttle(fn, 400);

// V1 (leading edge) — fires immediately, then blocks for 400ms
throttled("a"); // fires immediately
throttled("b"); // ignored (within 400ms)
// 400ms later...
throttled("c"); // fires immediately again

// V2 (trailing edge) — first call schedules a fire after 400ms
throttled("a"); // schedules fire in 400ms
throttled("b"); // ignored (timer already running)
// 400ms later fn fires with args ("a")...
throttled("c"); // schedules next fire
```

## Common use cases

- Scroll / mousemove handlers — limit how often a heavy calculation runs
- Button click protection — prevent double-submits

## Difference from debounce

| | Debounce | Throttle |
|---|---|---|
| Resets timer on each call | yes | no |
| Guarantees periodic firing | no | yes |
| Good for | search input | scroll, resize |

## Notes

- V1: timestamp-based (leading edge) — fires on the first call, then enforces a cooldown via `Date.now()`
- V2: timer-based (trailing edge) — delays the first fire by `delay` ms; uses a `null` flag to block re-entry
- Both use `fn.apply(this, args)` inside a regular `function` wrapper to correctly forward the caller's `this`
- V2 edge case: if `fn` throws, `timer` stays non-null and the throttle locks permanently — fix with `try/finally` in production code
