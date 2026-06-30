# Custom Call

## Problem

Implement `Function.prototype.call2`, a polyfill for the native `Function.prototype.call`. It invokes the function with `this` bound to the given context object, passing through any additional arguments.

## Examples

```js
function f(a, b) {
  return this.x + a + b;
}

const obj = { x: 100 };

f.call2(obj, 20, 3) === 123; // true

[].every.call2("12345", (x) => x >= "0" && x <= "9"); // true — works with a primitive thisArg
```

## Constraints

- `this` inside the called function must be the actual context object — not a copy or an object that merely inherits from it
- Mutations made to `this` inside the function must be visible on the original context object afterward
- If no context is provided, default to the global object (matches native `call` in non-strict mode)
- A primitive `thisArg` (string, number, boolean) must be boxed into its wrapper object so it can carry a temporary property and so indexed/length access still works (e.g. for array-like string iteration)

## Notes

- Standard trick: temporarily attach the function as an own property of the context object, call it as a method (so `this` resolves to the context), then delete the temporary property
- Use a `Symbol` as the temporary key to avoid colliding with existing properties on the context object
- A common mistake is using `Object.create(context)` — this only works for property *reads* via the prototype chain; property *writes* on `this` end up on the new wrapper object instead of the original context
- Another common mistake: assigning a property directly on a primitive `context` (e.g. a string) — primitives can't hold properties, so the assignment silently no-ops in non-strict mode and the temporary key reads back as `undefined`. Fix with `Object(context)` to box it first
