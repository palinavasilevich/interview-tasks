# Promise State

## Description

A Promise can be in one of three states:

- `pending`
- `fulfilled`
- `rejected`

JavaScript does **not** provide a standard API to synchronously inspect the current state of a Promise. The only way to interact with a Promise is through its methods:

- `then`
- `catch`
- `finally`

Implement a function `getState` that returns the current state of a Promise.

Since the state cannot be determined synchronously, the function itself must return a **Promise** that resolves to one of the following strings:

- `"pending"`
- `"fulfilled"`
- `"rejected"`

---

## Function Signature

```javascript
function getState(promise) {
  // ...
}
```

---

## Examples

### Fulfilled Promise

```javascript
const p1 = Promise.resolve();

getState(p1).then((actual) => {
  console.log(actual);
});

// "fulfilled"
```

---

### Rejected Promise

```javascript
const p2 = Promise.reject();

getState(p2).then((actual) => {
  console.log(actual);
});

// "rejected"
```

---

### Pending Promise

```javascript
const p3 = new Promise(() => {});

getState(p3).then((actual) => {
  console.log(actual);
});

// "pending"
```

---

### Promise That Changes State

```javascript
const p = new Promise((resolve) => {
  setTimeout(() => resolve("done"), 2000);
});

setTimeout(async () => {
  console.log(await getState(p));
  // "pending"
}, 1000);

setTimeout(async () => {
  console.log(await getState(p));
  // "fulfilled"
}, 3000);
```

---

## Solution

The trick is to use `Promise.race()`.

We race the original Promise against a unique marker value. If the marker wins, the Promise is still pending. Otherwise, the original Promise has already settled.

```javascript
function getState(promise) {
  const pending = Symbol("pending");

  return Promise.race([promise, pending]).then(
    (value) => (value === pending ? "pending" : "fulfilled"),
    () => "rejected",
  );
}
```

---

## Explanation

`Promise.race()` settles as soon as the first value settles.

- If the Promise has already been **fulfilled**, it wins the race.
- If it has already been **rejected**, the race rejects.
- If it is still **pending**, the marker value is immediately converted into a resolved Promise and wins instead.

This allows us to infer the Promise's current state without waiting for it to settle.

---

## Complexity Analysis

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`

---

## Key Concepts

- Promise states
- Promise chaining
- `Promise.race()`
- Thenables
- Microtasks
- Event Loop
