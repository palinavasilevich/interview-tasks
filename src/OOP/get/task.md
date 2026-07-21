# Task: Implement `Object.prototype.get`

## Description

Implement a method `Object.prototype.get(path)` that safely retrieves a nested property from an object.

The method should accept a dot-separated path and return the corresponding value.

If any property along the path does not exist, return `undefined` instead of throwing an error.

---

## Example

```javascript
const obj = {
  b: {
    x: 1,
  },
  a: {
    m: {
      n: {
        y: 8,
      },
    },
  },
};

console.log(obj.get("b")); // { x: 1 }
console.log(obj.get("b.x")); // 1
console.log(obj.get("a.m.n.y")); // 8
console.log(obj.get("b.m")); // undefined
console.log(obj.get("b.q.w.e")); // undefined
```

---

## Requirements

- Add a method `get` to `Object.prototype`.
- The path is a string with keys separated by dots (`.`).
- Return the value if the path exists.
- Return `undefined` if any part of the path is missing.
- The implementation must not throw an exception when the path cannot be fully resolved.

---

## Edge Cases

The implementation should correctly handle falsy values:

```javascript
const obj = {
  a: {
    zero: 0,
    bool: false,
    empty: "",
    nil: null,
  },
};

obj.get("a.zero"); // 0
obj.get("a.bool"); // false
obj.get("a.empty"); // ""
obj.get("a.nil"); // null
obj.get("a.missing"); // undefined
```

---

## Possible Solution

```javascript
Object.prototype.get = function (path) {
  let current = this;

  for (const key of path.split(".")) {
    if (current == null) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};
```

---

## Complexity

- **Time:** `O(n)`, where `n` is the number of keys in the path.
- **Space:** `O(n)` because of `split(".")` (or `O(1)` extra space if the path is parsed without creating an array).
