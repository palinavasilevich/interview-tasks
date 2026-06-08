# Deep Clone

## Problem

Implement `deepClone(value)` that returns a deep copy of a plain object or array. Mutating the clone must not affect the original, and vice versa. The function must handle circular references without infinite looping.

## Examples

```js
const obj = { x: 1, y: { z: 2 } };
const copy = deepClone(obj);

copy.y.z = 100;
console.log(copy.y.z); // 100
console.log(obj.y.z);  // 2  — original unchanged

// Circular reference
const a = {};
a.self = a;
const b = deepClone(a);
console.log(b.self === b); // true — circular ref preserved, no infinite loop
```

## Constraints

- Input is a plain object, array, or primitive
- Must handle circular references
- No need to handle `Date`, `Map`, `Set`, `RegExp`, or functions

## Notes

- Use a `WeakMap` to track already-cloned objects and break cycles
- `seen.set(value, cloned)` must happen **before** recursing into children — otherwise circular refs cause infinite recursion
- `Object.hasOwn(value, key)` skips inherited prototype properties (equivalent to `Object.prototype.hasOwnProperty.call(value, key)`)
- Primitives and `null` are immutable — return them as-is without cloning
