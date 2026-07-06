# Select / Query Pipeline

## Problem

Implement a `query(...fns)` function that returns a data pipeline. When called with an array, it passes the data through each function in sequence and returns the final result.

Also implement two pipeline helpers:
- `where(key, value)` — filters items where `item[key] === value`
- `sort(key)` — sorts items ascending by `item[key]` (numeric)

## Examples

```js
const search = query(
  where("name", "John"),
  where("surname", "Doe"),
  sort("age"),
);

search([
  { id: 1, name: "John", surname: "Doe",  age: 34 },
  { id: 2, name: "John", surname: "Doe",  age: 33 },
  { id: 3, name: "John", surname: "Doe1", age: 35 },
  { id: 4, name: "Mike", surname: "Doe",  age: 35 },
]);
// [
//   { id: 2, name: "John", surname: "Doe", age: 33 },
//   { id: 1, name: "John", surname: "Doe", age: 34 },
// ]
```

## Notes

- `query` copies the input array before processing — original data is not mutated
- Each helper is called via `fn.apply(currentArray)` so `this` inside the helper refers to the current array in the pipeline
- `sort` uses a universal comparator (`<`/`>`) that works for both numeric and string keys — numeric subtraction would return `NaN` for strings
