# Time Limited Cache

## Description

Implement a class `TimeLimitedCache` that stores key-value pairs with an expiration time.

Each key has its own lifetime (in milliseconds). Once the lifetime expires, the key is automatically removed from the cache.

The class must implement the following methods:

- `set(key, value, duration)`
- `get(key)`
- `count()`

---

## Class API

```javascript
class TimeLimitedCache {
  set(key, value, duration) {}

  get(key) {}

  count() {}
}
```

---

## Methods

### `set(key, value, duration)`

Stores a value associated with the given key for `duration` milliseconds.

- Returns `false` if the key did not previously exist.
- Returns `true` if the key already existed.
- In both cases, the value is updated.
- If the key already exists, its expiration timer must be reset using the new duration.

---

### `get(key)`

Returns the value associated with the key.

If the key does not exist or has already expired, return `-1`.

---

### `count()`

Returns the number of non-expired keys currently stored in the cache.

---

## Example

```javascript
const cache = new TimeLimitedCache();

setTimeout(() => console.log(cache.set(1, 500, 450)), 0); // false
setTimeout(() => console.log(cache.get(1)), 100); // 500

setTimeout(() => console.log(cache.set(2, 600, 350)), 200); // false
setTimeout(() => console.log(cache.get(2)), 300); // 600

setTimeout(() => console.log(cache.count()), 400); // 2

setTimeout(() => console.log(cache.set(2, 800, 250)), 500); // true

setTimeout(() => console.log(cache.count()), 600); // 1

setTimeout(() => console.log(cache.get(2)), 700); // 800
```

---

## Solution

Store not only the value, but also the timer identifier for each key.

When an existing key is updated:

1. Cancel the previous timer.
2. Create a new timer.
3. Store the updated value and timer.

```javascript
class TimeLimitedCache {
  #cache = new Map();

  set(key, value, duration) {
    const hasKey = this.#cache.has(key);

    if (hasKey) {
      clearTimeout(this.#cache.get(key).timerId);
    }

    const timerId = setTimeout(() => {
      this.#cache.delete(key);
    }, duration);

    this.#cache.set(key, {
      value,
      timerId,
    });

    return hasKey;
  }

  get(key) {
    if (!this.#cache.has(key)) {
      return -1;
    }

    return this.#cache.get(key).value;
  }

  count() {
    return this.#cache.size;
  }
}
```

---

## Explanation

Each cache entry stores:

```javascript
{
  (value, timerId);
}
```

When a key is updated:

- the previous expiration timer is cancelled using `clearTimeout()`;
- a new timer is created with the new duration;
- the cache entry is replaced.

This guarantees that updating a key extends its lifetime correctly.

---

## Complexity Analysis

Let **n** be the number of keys currently stored.

| Method    | Time   | Space  |
| --------- | ------ | ------ |
| `set()`   | `O(1)` | `O(1)` |
| `get()`   | `O(1)` | `O(1)` |
| `count()` | `O(1)` | `O(1)` |

Overall cache memory usage is **O(n)**.

---

## Edge Cases

### Empty cache

```javascript
const cache = new TimeLimitedCache();

console.log(cache.get(1));
// -1

console.log(cache.count());
// 0
```

---

### Updating an existing key

```javascript
cache.set(1, "A", 1000);

setTimeout(() => {
  cache.set(1, "B", 1000);
}, 500);

setTimeout(() => {
  console.log(cache.get(1));
  // "B"
}, 1200);
```

The key is still available because the expiration timer was reset.

---

### Expired key

```javascript
cache.set(1, "hello", 500);

setTimeout(() => {
  console.log(cache.get(1));
  // -1
}, 600);
```

---

## Key Concepts

- `Map`
- `setTimeout()`
- `clearTimeout()`
- Private class fields (`#`)
- Cache expiration
- Time-based data structures
- Object lifecycle management

```

```
