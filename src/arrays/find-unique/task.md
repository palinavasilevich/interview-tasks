# Find Unique

## Problem

Given an array of numbers where every element appears exactly twice except for one, find and return the unique element.

## Examples

```ts
findUnique([1, 8, 4, 4, 6, 1, 8]); // 6
findUnique([3, 3, 7]);              // 7
findUnique([5]);                    // 5
findUnique([2, 1, 2]);              // 1
```

## Constraints

- `1 <= numbers.length <= 10^4` (always odd)
- Exactly one element appears once, all others appear exactly twice
- Numbers can be in any order

## Notes

- V1: `Map` frequency count — O(n) time, O(n) space; return the key with count 1
- V2: `indexOf` / `lastIndexOf` per element — O(n²) time, O(1) space; simple but slow
- V3: sort + neighbor check — O(n log n) time, O(n) space; after sorting duplicates are adjacent, unique element differs from both neighbors; boundary indices return `undefined` which safely fails the `!==` check
- XOR trick (not implemented): `numbers.reduce((acc, n) => acc ^ n, 0)` — O(n) time, O(1) space; XOR of two equal numbers is 0, so all duplicates cancel out
