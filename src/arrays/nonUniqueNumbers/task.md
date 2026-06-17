# Non-Unique Numbers

## Problem

Given an array of integers, return a new array containing only the elements that appear **more than once**, preserving their original order and all occurrences.

## Examples

```ts
nonUniqueNumbers([10, 5, 1, 2, 5, 3, 2, 1, 5, 8]);
// [5, 1, 2, 5, 2, 1, 5]
// 10, 3, 8 appear once → removed; all occurrences of 5, 1, 2 are kept

nonUniqueNumbers([1, 2, 3]);    // []
nonUniqueNumbers([1, 1, 1]);    // [1, 1, 1]
```

## Constraints

- Preserve original order and all occurrences of non-unique elements
- `0 <= numbers.length <= 10^4`

## Notes

- Two passes are necessary: the full frequency map must be built before filtering, since a duplicate may appear later in the array
- Use `?? 0` not `|| 0` for the default in `Map.get()` — `||` treats `0` as falsy; `??` only falls back on `null`/`undefined`
- The second loop can be replaced with `filter` once the map is built
