# Function Argument Validation

## Description

Implement a higher-order function `withArgsValidation` that wraps another function and validates the number of arguments passed to it.

If the wrapped function is called with a different number of arguments than it declares, an error should be thrown.

Otherwise, the original function should be executed normally.

---

## Function Signature

```javascript
function withArgsValidation(fn) {
  // ...
}
```

---

## Requirements

- Accept a function `fn`.
- Return a new function.
- The returned function must:
  - compare the number of received arguments with `fn.length`;
  - throw an `Error` with the message:

```text
Invalid number of arguments
```

if the numbers differ;

- otherwise call the original function and return its result.

---

## Examples

### Valid Call

```javascript
function sum(a, b) {
  return a + b;
}

const sumWithValidation = withArgsValidation(sum);

console.log(sumWithValidation(1, 2));

// 3
```

---

### Too Few Arguments

```javascript
function sum(a, b) {
  return a + b;
}

const sumWithValidation = withArgsValidation(sum);

sumWithValidation(5);

// Error: Invalid number of arguments
```

---

### Too Many Arguments

```javascript
function multiply(a, b) {
  return a * b;
}

const multiplyWithValidation = withArgsValidation(multiply);

multiplyWithValidation(2, 3, 4);

// Error: Invalid number of arguments
```

---

### Another Function

```javascript
function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

const greetWithValidation = withArgsValidation(greet);

console.log(greetWithValidation("John", "Doe"));

// "Hello, John Doe!"
```

---

## Solution

Use the function's `length` property to determine how many parameters it expects.

```javascript
function withArgsValidation(fn) {
  return function (...args) {
    if (args.length !== fn.length) {
      throw new Error("Invalid number of arguments");
    }

    return fn.apply(this, args);
  };
}
```

---

## Explanation

Every JavaScript function has a `length` property that represents the number of declared parameters.

For example:

```javascript
function sum(a, b) {}

console.log(sum.length);

// 2
```

The wrapper compares:

- `args.length` — the number of received arguments;
- `fn.length` — the expected number of arguments.

If they differ, an error is thrown.

Otherwise, the original function is invoked using `Function.prototype.apply()`, preserving the calling context (`this`).

---

## Complexity Analysis

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`

---

## Key Concepts

- Higher-order functions
- Closures
- `Function.prototype.length`
- Rest parameters (`...args`)
- `Function.prototype.apply()`
- Error handling

```

```
