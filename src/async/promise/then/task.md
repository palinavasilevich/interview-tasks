# JavaScript Promises — Promise Chaining & Error Handling

## Task 4: Promise Chaining

Given the following asynchronous functions:

```js
function getNumber() {
  return Promise.resolve(5);
}

function double(number) {
  return Promise.resolve(number * 2);
}

function triple(number) {
  return Promise.resolve(number * 3);
}
```

Using only Promise chaining with `.then()`, call the functions sequentially:

```text
getNumber() → double() → triple()
```

Print the final result to the console.

### Expected Output

```text
30
```

### Requirements

- Use `.then()` for Promise chaining.
- Do not use `async/await`.
- Do not modify the provided functions.

---

## Task 5: Returning Values from `.then()`

Given the following functions:

```js
function getNumber() {
  return Promise.resolve(5);
}

function double(number) {
  return number * 2;
}

function triple(number) {
  return number * 3;
}
```

Create a Promise chain that gets the initial number using `getNumber()`, passes it to `double()`, passes the result to `triple()`, and prints the final result.

### Expected Output

```text
30
```

### Requirements

- Use `.then()` for Promise chaining.
- `double()` and `triple()` return regular values, not Promises.
- Do not wrap their return values in `Promise.resolve()`.
- Do not use `async/await`.

---

## Task 6: Returning a Promise from `.then()`

Given the following asynchronous functions:

```js
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: "Post 1" },
        { id: 2, userId, title: "Post 2" },
      ]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId, text: "Great post!" },
        { id: 2, postId, text: "Thanks!" },
      ]);
    }, 1000);
  });
}
```

Using Promise chaining:

1. Get the user.
2. Use the user's `id` to get their posts.
3. Take the first post.
4. Use the post's `id` to get its comments.
5. Print the comments to the console.

### Expected Output

```js
[
  { id: 1, postId: 1, text: "Great post!" },
  { id: 2, postId: 1, text: "Thanks!" },
];
```

### Requirements

- Use `.then()` for Promise chaining.
- Do not use `async/await`.
- Do not create additional Promises.
- Do not nest `.then()` calls.
- Do not modify the provided functions.

---

## Task 7: Error Handling in a Promise Chain

Given:

```js
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject(new Error("User not found"));
      }
    }, 500);
  });
}
```

Implement:

```js
function printUser(id) {
  // Your code
}
```

For `printUser(1)`, expected output:

```text
Hello, Alice
```

For `printUser(2)`, expected output:

```text
Error: User not found
```

### Requirements

- Use `.then()` and `.catch()`.
- Do not use `async/await`.
- Do not modify `getUser()`.

---

## Task 8: Error Inside `.then()`

Given:

```js
function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
    age: 17,
  });
}
```

Create a Promise chain that:

1. Gets the user.
2. Checks the user's age.
3. If the user is younger than `18`, throws:

```js
throw new Error("User is too young");
```

4. If the user is 18 or older, returns the user's name.
5. Prints `Welcome, Alice` in the next `.then()`.
6. Handles errors with `.catch()`.

### Expected Error Output

```text
Error: User is too young
```

### Requirements

- Use `.then()` and `.catch()`.
- Use `throw` to create the error.
- Do not use `Promise.reject()`.
- Do not use `async/await`.
- Do not modify `getUser()`.
