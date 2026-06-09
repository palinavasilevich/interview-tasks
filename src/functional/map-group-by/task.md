# Map Group By

## Problem

Implement `groupBy(items, callback)` that groups elements of an array by the key returned from `callback(item, index)`. Returns a `Map` where each key maps to an array of all items that produced that key.

## Examples

```js
const words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

groupBy(words, (w) => w.length);
// Map {
//   3 => ["the", "fox", "the", "dog"],
//   5 => ["quick", "brown", "jumps"],
//   4 => ["over", "lazy"],
// }

groupBy([1, 2, 3, 4, 5], (n) => n % 2 === 0 ? "even" : "odd");
// Map {
//   "odd"  => [1, 3, 5],
//   "even" => [2, 4],
// }
```

## Constraints

- Callback signature: `(item, index) => key`
- Keys can be of any type — use `Map`, not a plain object
- Items with the same key must be collected into an array in their original order

## Notes

- Use `Map` over a plain object so non-string keys (numbers, objects) work correctly
- Check `map.has(key)` before setting: `map.set(key, item)` overwrites existing values — always push into an array instead
