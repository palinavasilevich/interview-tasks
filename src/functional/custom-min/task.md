# Custom Min

## Problem

Implement a `min(array, compareFn)` function that returns the minimum element of an array according to a comparator function.

The comparator follows the same convention as `Array.prototype.sort`: returns a negative number if `a < b`, positive if `a > b`, and `0` if equal.

Throw a `TypeError` if the array is empty.

## Examples

```js
const students = [
  { name: "A", age: 15 },
  { name: "B", age: 8 },
  { name: "C", age: 23 },
];

min(students, (a, b) => a.age - b.age);
// { name: "B", age: 8 }

min(cities, (a, b) => a.population - b.population);
// { city: "Mumbai", population: 12400000, ... }

min(cities, (a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
// { city: "Beijing", country: "China", ... }

min([], (a, b) => a - b); // TypeError: Min of empty array
```

## Constraints

- Throw `TypeError` for empty arrays
- compareFn signature: `(a, b) => number` — same convention as `Array.prototype.sort`

## Notes

- Use `reduce` without an initial value — the accumulator starts as the first element, which is the correct initial "minimum"
- Each item is compared against the running minimum: `compareFn(item, minItem) < 0` means `item` is smaller
- A common mistake is comparing adjacent pairs or using `0` as the initial accumulator — both produce wrong results
