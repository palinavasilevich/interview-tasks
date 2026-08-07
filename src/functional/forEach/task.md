# Implement `forEach`

## Description

Implement your own version of the `Array.prototype.forEach()` method.

The function accepts an array and a callback function. It should execute the callback once for each element in the array.

The callback receives three arguments:

1. The current element.
2. The current index.
3. The original array.

Unlike `Array.prototype.map()`, the `forEach()` function does **not** return a new array.

---

## Function Signature

```javascript
function forEach(array, callback) {
  // ...
}
```

---

## Requirements

- Iterate through every element of the array.
- Execute the callback once for each element.
- Pass the following arguments to the callback:
  - current value
  - current index
  - original array
- The function should not return anything (`undefined`).

---

## Examples

### Basic Example

```javascript
forEach([1, 2, 3], (x) => {
  console.log(x ** 2);
});

// Output:
// 1
// 4
// 9
```

---

### Accessing Index

```javascript
forEach(["A", "B", "C"], (value, index) => {
  console.log(index, value);
});

// Output:
// 0 "A"
// 1 "B"
// 2 "C"
```

---

### Accessing the Original Array

```javascript
forEach([10, 20, 30], (value, index, array) => {
  console.log(value, array.length);
});

// Output:
// 10 3
// 20 3
// 30 3
```

---

## Solution

```javascript
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
```

---

## Alternative (Closer to Native Implementation)

The native `Array.prototype.forEach()` also supports a `thisArg` and skips empty slots in sparse arrays.

```javascript
function forEach(array, callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < array.length; i++) {
    if (!(i in array)) {
      continue;
    }

    callback.call(thisArg, array[i], i, array);
  }
}
```

---

## Explanation

The function simply iterates through the array using a `for` loop.

For every iteration it calls the callback with:

```javascript
callback(currentValue, currentIndex, originalArray);
```

Unlike `map()`, the return value of the callback is ignored.

---

## Complexity Analysis

Let **n** be the number of elements in the array.

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

---

## Key Concepts

- Arrays
- Iteration
- Callback functions
- Higher-order functions
- Function arguments
- Time complexity
- `Array.prototype.forEach()`

```

```
