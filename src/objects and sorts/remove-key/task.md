# Task: Remove a Property from Every Object in an Array

## Description

Implement a function `removeKey(objects, key)` that removes a specified property from every object in an array.

The function should return a **new array** containing **new objects** without modifying the originals.

---

## Example

```javascript
const users = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(removeKey(users, "age"));
```

Output:

```javascript
[
  { name: "A", location: "Qwe" },
  { name: "B", location: "Asd" },
  { name: "C", location: "Zxc" },
];
```

---

## Requirements

- Return a new array.
- Return new objects.
- Do not mutate the original objects.
- Remove only the specified key.
- Preserve all other properties.

---

## Example

```javascript
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
];

removeKey(products, "price");
```

Result:

```javascript
[
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
];
```

---

## Possible Solution

```typescript
function removeKey(objects: Record<string, unknown>[], key: string) {
  return objects.map((obj) => {
    const newObj: Record<string, unknown> = {};

    for (const prop of Object.keys(obj)) {
      if (prop !== key) {
        newObj[prop] = obj[prop];
      }
    }

    return newObj;
  });
}
```

---

## Alternative Solution

```javascript
function removeKey(objects, key) {
  return objects.map(({ [key]: _, ...rest }) => rest);
}
```

This solution uses object destructuring to omit the specified property.

---

## Complexity

Let:

- **n** = number of objects
- **m** = average number of properties per object

**Time Complexity:** `O(n × m)`

Each property of every object is visited exactly once.

**Space Complexity:** `O(n × m)`

New objects are created, containing copies of all remaining properties.
