# Sum Multiple Promises

## Description

Implement a function `sum` that accepts any number of Promises, each resolving to a number, and returns a Promise that resolves to the sum of all resolved values.

You may assume that **all Promises resolve successfully** (none of them reject).

---

## Function Signature

```javascript
function sum(...promises) {
  // ...
}
```

---

## Examples

### No Promises

```javascript
sum().then(console.log);

// 0
```

---

### One Promise

```javascript
const p1 = Promise.resolve(1);

sum(p1).then(console.log);

// 1
```

---

### Multiple Promises

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

sum(p1, p2).then(console.log);

// 3

sum(p1, p2, p3).then(console.log);

// 6
```

---

### Promises with Delays

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve(10), 100);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(20), 500);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(30), 300);
});

sum(p1, p2, p3).then(console.log);

// 60
```

---

## Solution

The simplest solution is to wait until all Promises resolve using `Promise.all()`, then calculate the sum with `Array.prototype.reduce()`.

```javascript
function sum(...promises) {
  return Promise.all(promises).then((values) =>
    values.reduce((sum, value) => sum + value, 0),
  );
}
```

---

## Explanation

`Promise.all()` returns a Promise that resolves when **all input Promises** have resolved.

For example:

```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);

// resolves to [1, 2, 3]
```

Once all values are available, `reduce()` is used to calculate their total.

If no Promises are provided:

```javascript
Promise.all([]);
```

immediately resolves to

```javascript
[];
```

Since `reduce()` starts with an initial value of `0`, the result is also `0`.

---

## Complexity Analysis

- **Time Complexity:** `O(n)`, where `n` is the number of Promises.
- **Space Complexity:** `O(n)` for the array returned by `Promise.all()`.

---

## Key Concepts

- Promises
- `Promise.all()`
- Promise chaining
- `Array.prototype.reduce()`
- Rest parameters (`...args`)

```

```
