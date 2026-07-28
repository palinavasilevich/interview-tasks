# Compose Functions

## Description

Implement a function `compose` that accepts any number of unary functions and returns a new function representing their composition.

The composed function applies the provided functions **from right to left**.

For example:

```text
compose(f, g, h)(x)
```

is equivalent to

```text
f(g(h(x)))
```

If no functions are provided, the returned function should simply return its argument unchanged.

---

## Function Signature

```javascript
function compose(...funcs) {
  // ...
}
```

---

## Examples

### Basic Composition

```javascript
const double = (x) => x * 2;
const cube = (x) => x ** 3;
const inc = (x) => x + 1;

const foo = compose(double, cube, inc);

console.log(foo(0));
// 2

console.log(foo(1));
// 16

console.log(foo(2));
// 54
```

---

### Different Data Types

```javascript
const fill = (x) => Array(3).fill(x);
const repeat = (x) => x.repeat(5);
const last = (arr) => arr.at(-1);

const foo = compose(fill, repeat, last);

console.log(foo(["a", "b", "c"]));
// ["ccccc", "ccccc", "ccccc"]
```

---

### Empty Composition

```javascript
const foo = compose();

console.log(foo("hello"));
// "hello"

console.log(foo(42));
// 42

console.log(foo([1, 2, 3]));
// [1, 2, 3]
```

---

## Solution

Iterate through the functions from right to left, passing the result of each function into the previous one.

```javascript
function compose(...funcs) {
  return (arg) => {
    let result = arg;

    for (let i = funcs.length - 1; i >= 0; i--) {
      result = funcs[i](result);
    }

    return result;
  };
}
```

---

## Alternative Solution

Using `Array.prototype.reduceRight()`:

```javascript
function compose(...funcs) {
  return (arg) => funcs.reduceRight((result, fn) => fn(result), arg);
}
```

---

## Explanation

Function composition means combining several functions into one.

Given

```javascript
compose(f, g, h);
```

the execution order is:

```text
input
  │
  ▼
h
  │
  ▼
g
  │
  ▼
f
  │
  ▼
result
```

The last function receives the original argument.

Each previous function receives the result of the next one.

If no functions are supplied, the composed function acts as the identity function and simply returns its input unchanged.

---

## Complexity Analysis

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

where `n` is the number of composed functions.

---

## Key Concepts

- Higher-order functions
- Function composition
- Closures
- Rest parameters
- `reduceRight()`
- Functional programming

```

```
