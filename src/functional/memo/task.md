# Task: Implement a Memoization Function

## Description

Implement a function `memo(fn)` that returns a memoized version of the given function.

The memoized function should cache the results of previous calls. If it is called again with the same arguments, it should return the cached result instead of executing the original function.

---

## Example

```javascript
function double(x) {
  for (let i = 0; i < 1e9; i++);
  return x * 2;
}

const mDouble = memo(double);

console.time("A");
console.log(mDouble(1)); // 2
console.timeEnd("A"); // Slow

console.time("B");
console.log(mDouble(1)); // 2
console.timeEnd("B"); // Fast

console.time("C");
console.log(mDouble(3)); // 6
console.timeEnd("C"); // Slow

console.time("D");
console.log(mDouble(3)); // 6
console.timeEnd("D"); // Fast
```

---

## Requirements

- Return a new memoized function.
- Cache function results based on the arguments.
- Return the cached result for repeated calls with the same arguments.
- Preserve the original `this` context.
- Use a `Map` for caching.

---

## Possible Solution

```javascript
function memo(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}
```

---

## Notes

Using `JSON.stringify(args)` is a simple way to generate cache keys for primitive arguments. More advanced implementations may use nested `Map` or `WeakMap` structures to support object arguments by reference.

---

## Complexity

Let:

- **n** = number of arguments
- **k** = number of unique argument combinations

**Time Complexity**

- Cache hit: `O(n)` (key generation) + `O(1)` (lookup)
- Cache miss: `O(n)` + execution time of the original function

**Space Complexity**

`O(k)`

One cache entry is stored for each unique set of arguments.
