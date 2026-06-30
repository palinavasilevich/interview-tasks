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
```

## Constraints

- `this` inside the called function must be the actual context object — not a copy or an object that merely inherits from it
- Mutations made to `this` inside the function must be visible on the original context object afterward
- If no context is provided, default to the global object (matches native `call` in non-strict mode)

## Notes

- Standard trick: temporarily attach the function as an own property of the context object, call it as a method (so `this` resolves to the context), then delete the temporary property
- Use a `Symbol` as the temporary key to avoid colliding with existing properties on the context object
- A common mistake is using `Object.create(context)` — this only works for property *reads* via the prototype chain; property *writes* on `this` end up on the new wrapper object instead of the original context
