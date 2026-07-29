# Tuple Class

## Description

Implement a `Tuple` class that represents an immutable ordered collection of fixed length.

Unlike an Array:

- a Tuple should be treated as immutable;
- two Tuples can be compared for equality using the `equals()` method.

The constructor must work both **with** and **without** the `new` keyword.

---

## Function Signature

```javascript
function Tuple(...values) {
  // ...
}
```

---

## Requirements

- The constructor can be called with or without `new`.
- Store all passed values inside the tuple.
- Implement an `equals(tuple)` method.
- `equals()` returns `true` only if:
  - the argument is an instance of `Tuple`;
  - both tuples have the same length;
  - every element is strictly equal (`===`) and appears in the same position.
- `instanceof Tuple` must work correctly.

---

## Examples

### Equal Tuples

```javascript
const colors1 = Tuple("red", "yellow", "green");
const colors2 = Tuple("red", "yellow", "green");

console.log(colors1.equals(colors2));

// true
```

---

### Different Values

```javascript
const colors1 = Tuple("red", "yellow", "green");
const colors2 = Tuple("red", "green", "blue");

console.log(colors1.equals(colors2));

// false
```

---

### Different Type

```javascript
const colors = Tuple("red", "yellow");

console.log(colors.equals("hello"));

// false
```

---

### instanceof

```javascript
const colors = Tuple("red", "yellow");

console.log(colors instanceof Tuple);

// true
```

---

### Constructor Without new

```javascript
const tuple = Tuple(1, 2, 3);

console.log(tuple instanceof Tuple);

// true
```

---

## Solution

```javascript
function Tuple(...data) {
  if (!(this instanceof Tuple)) {
    return new Tuple(...data);
  }

  this.data = Object.freeze([...data]);
}

Tuple.prototype.equals = function (tuple) {
  if (!(tuple instanceof Tuple)) {
    return false;
  }

  if (tuple.data.length !== this.data.length) {
    return false;
  }

  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i] !== tuple.data[i]) {
      return false;
    }
  }

  return true;
};
```

---

## Explanation

When `Tuple()` is called without `new`, it recursively creates a new instance using the constructor.

The tuple values are copied and frozen using `Object.freeze()` to prevent accidental mutation.

The `equals()` method performs three checks:

1. The argument must be a `Tuple`.
2. Both tuples must have the same length.
3. Every corresponding element must be strictly equal (`===`).

Only if all three conditions are satisfied does it return `true`.

---

## Complexity Analysis

### Constructor

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`

where `n` is the number of stored elements.

### equals()

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## Key Concepts

- Constructor Functions
- `new.target`
- `instanceof`
- Prototype
- `Object.freeze()`
- Immutable Data
- Strict Equality (`===`)
