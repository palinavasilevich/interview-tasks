# Regular Polling

## Description

Sometimes a backend operation takes an unknown amount of time to complete.

For example, after submitting a long-running task, the server may initially respond that it is still processing the request. The frontend should periodically send requests until the operation is finished.

Implement a function `polling` that repeatedly calls an asynchronous `fetcher` function every `delay` milliseconds until the provided `isCompleted` function returns `true`.

If `fetcher` rejects, wait `delay` milliseconds and try again.

The function should return a Promise that resolves with the first successful response that satisfies `isCompleted`.

---

## Function Signature

```ts
function polling<T>(
  fetcher: () => Promise<T>,
  isCompleted: (response: T) => boolean,
  delay: number,
): Promise<T>;
```

---

## Examples

### Example 1

```ts
const testingResponse = {
  status: "testing",
};

const timeLimitResponse = {
  status: "timeLimit",
};

let i = 0;

const fakeFetcher = async () => {
  return i++ < 3 ? testingResponse : timeLimitResponse;
};

polling(fakeFetcher, (response) => response.status !== "testing", 500).then(
  console.log,
);

// after ~1.5 seconds:
// { status: "timeLimit" }
```

---

### Example 2

```ts
const doneResponse = {
  status: "done",
  results: [
    { name: "Test #1", ok: true },
    { name: "Test #2", ok: true },
  ],
};

let attempts = 0;

const fetcher = async () => {
  attempts++;

  if (attempts < 5) {
    return {
      status: "testing",
    };
  }

  return doneResponse;
};

polling(fetcher, (response) => response.status === "done", 1000).then(
  console.log,
);

// after ~4 seconds:
// {
//   status: "done",
//   results: [...]
// }
```

---

### Example 3 — Retry After Error

```ts
let attempts = 0;

const fetcher = async () => {
  attempts++;

  if (attempts === 2) {
    throw new Error("Network error");
  }

  if (attempts < 5) {
    return {
      status: "testing",
    };
  }

  return {
    status: "done",
  };
};

polling(fetcher, (response) => response.status === "done", 500).then(
  console.log,
);

// retries automatically after the failed request
```

---

## Solution

A recursive `setTimeout()` is preferred over `setInterval()`.

The next request starts **only after the previous one has finished**, preventing multiple concurrent requests.

```ts
function polling<T>(
  fetcher: () => Promise<T>,
  isCompleted: (response: T) => boolean,
  delay: number,
): Promise<T> {
  return new Promise((resolve) => {
    const execute = () => {
      fetcher()
        .then((result) => {
          if (isCompleted(result)) {
            resolve(result);
          } else {
            setTimeout(execute, delay);
          }
        })
        .catch(() => {
          setTimeout(execute, delay);
        });
    };

    execute();
  });
}
```

---

## Alternative Solution (async/await)

```ts
async function polling<T>(
  fetcher: () => Promise<T>,
  isCompleted: (response: T) => boolean,
  delay: number,
): Promise<T> {
  while (true) {
    try {
      const result = await fetcher();

      if (isCompleted(result)) {
        return result;
      }
    } catch {
      // ignore errors and retry
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
```

---

## Why Not `setInterval()`?

Using `setInterval()` may start a new request before the previous one has completed.

Example:

```text
delay = 1000 ms

0 ms      fetch #1 starts

1000 ms   fetch #2 starts

1500 ms   fetch #1 finishes

2000 ms   fetch #3 starts
```

Several requests may be in flight simultaneously.

Using recursive `setTimeout()` guarantees the following sequence:

```text
fetch

↓

wait for response

↓

delay

↓

fetch

↓

wait for response

↓

delay
```

Only one request is active at any given time.

---

## Complexity Analysis

Let **n** be the number of polling attempts before completion.

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## Key Concepts

- Promises
- Polling
- Retry mechanism
- Recursive `setTimeout()`
- `async/await`
- Error handling
- Event Loop
- Asynchronous JavaScript

```

```
