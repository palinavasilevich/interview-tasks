# JavaScript Promises — Basic Tasks

## Task 1: delay

Implement a function `delay` that accepts a number of milliseconds `ms` and returns a `Promise`.

The Promise should be fulfilled after the specified delay.

### Example

```js
delay(1000).then(() => {
  console.log("Done");
});

// After 1 second:
// Done
```

The function should also work with `async/await`:

```js
await delay(1000);

console.log("Done");

// After 1 second:
// Done
```

---

## Task 2: delayWithValue

Implement a function `delayWithValue` that accepts:

- `ms` — the delay in milliseconds;
- `value` — the value the Promise should resolve with.

The function should return a `Promise` that is fulfilled with the provided `value` after the specified delay.

### Example

```js
delayWithValue(1000, "Hello").then(console.log);

// After 1 second:
// Hello
```

The function should work with any type of value:

```js
delayWithValue(500, 42).then(console.log);

// After 500 ms:
// 42
```

---

## Task 3: randomDelay

Implement a function `randomDelay` that accepts a `value` and returns a `Promise`.

The Promise should be fulfilled with the provided `value` after a random delay between **1 and 3 seconds**.

### Example

```js
randomDelay("Hello").then(console.log);

// After a random delay between 1 and 3 seconds:
// Hello
```

Multiple calls should run independently:

```js
randomDelay("A").then(console.log);
randomDelay("B").then(console.log);
randomDelay("C").then(console.log);
```

Since each Promise has a random delay, the output order may vary:

```text
B
C
A
```

or:

```text
A
C
B
```

or any other order.
