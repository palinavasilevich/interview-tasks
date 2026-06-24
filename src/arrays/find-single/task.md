# Find Single

## Problem

Given an array of integers where every integer appears exactly twice except for one, find and return the integer that appears only once.

## Examples

```ts
findSingle([10, 2, 2, 1, 0, 0, 10]); // 1
findSingle([4, 1, 2, 1, 2]);          // 4
findSingle([1]);                       // 1
```

## Constraints

- Exactly one integer appears once; all others appear exactly twice
- Array has at least one element

## Approaches

### v1: Map — O(n) time, O(n) space

Count occurrences with a `Map`, then return the key with count `1`.

### v2: XOR — O(n) time, O(1) space

XOR all elements together. Since `a ^ a = 0` and `a ^ 0 = a`, every pair cancels out, leaving the single element.

```ts
arr.reduce((acc, num) => acc ^ num, 0);
```

## Notes

- XOR is the optimal solution — no extra memory needed
- XOR works because it is commutative and associative, so order doesn't matter
