# Sort Objects by Key

## Description

Implement a function `sortBy` that sorts an array of objects by a specified key.

The original array **must not be mutated**. Instead, return a new sorted array.

Sorting rules:

- If the values associated with the key are **numbers**, sort them in ascending order.
- If the values are **strings**, sort them in lexicographical order.
- For any other value type, throw an error with the message:

```text
Invalid key value
```

---

## Function Signature

```javascript
function sortBy(array, key) {
  // ...
}
```

---

## Examples

### Sort by Number

```javascript
const points = [
  { x: 5, y: 8 },
  { x: 9, y: 0 },
  { x: 1, y: 4 },
  { x: -6, y: 12 },
];

console.log(sortBy(points, "x"));

// [
//   { x: -6, y: 12 },
//   { x: 1, y: 4 },
//   { x: 5, y: 8 },
//   { x: 9, y: 0 },
// ]
```

---

### Sort by Another Numeric Key

```javascript
console.log(sortBy(points, "y"));

// [
//   { x: 9, y: 0 },
//   { x: 1, y: 4 },
//   { x: 5, y: 8 },
//   { x: -6, y: 12 },
// ]
```

---

### Sort by String

```javascript
const users = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(sortBy(users, "location"));

// [
//   { name: "B", age: 54, location: "Asd" },
//   { name: "A", age: 11, location: "Qwe" },
//   { name: "C", age: 23, location: "Zxc" },
// ]
```

---

### Sort by Age

```javascript
console.log(sortBy(users, "age"));

// [
//   { name: "A", age: 11, location: "Qwe" },
//   { name: "C", age: 23, location: "Zxc" },
//   { name: "B", age: 54, location: "Asd" },
// ]
```

---

### Invalid Value Type

```javascript
const objects = [
  { id: 1, data: {} },
  { id: 2, data: {} },
];

sortBy(objects, "data");

// Error: Invalid key value
```

---

## Solution

Determine the type of the values for the specified key and use the appropriate comparison function.

```javascript
function sortBy(array, key) {
  if (array.length === 0) {
    return [];
  }

  const type = typeof array[0][key];

  if (type !== "number" && type !== "string") {
    throw new Error("Invalid key value");
  }

  for (const item of array) {
    if (typeof item[key] !== type) {
      throw new Error("Invalid key value");
    }
  }

  return array.toSorted((a, b) =>
    type === "number" ? a[key] - b[key] : a[key].localeCompare(b[key]),
  );
}
```

---

## Explanation

The function first determines the type of the specified key.

- **Numbers** are sorted using subtraction:

```javascript
a[key] - b[key];
```

- **Strings** are sorted using:

```javascript
a[key].localeCompare(b[key]);
```

Before sorting, the function validates that every object contains a value of the same supported type.

The original array remains unchanged because `toSorted()` returns a new array.

---

## Complexity Analysis

Let **n** be the number of objects in the array.

| Operation       |   Complexity |
| --------------- | -----------: |
| Type validation |       `O(n)` |
| Sorting         | `O(n log n)` |

Overall:

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(n)`

---

## Key Concepts

- Array sorting
- `Array.prototype.toSorted()`
- `localeCompare()`
- Comparator functions
- Error handling
- Time complexity
- Immutable operations

```

```
