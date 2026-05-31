# Fibonacci Number

## Problem

Given a non-negative integer `n`, return the `n`-th Fibonacci number.

The Fibonacci sequence is defined as:
- `F(0) = 0`
- `F(1) = 1`
- `F(n) = F(n - 1) + F(n - 2)` for `n > 1`

## Examples

```
Input:  n = 0
Output: 0
```

```
Input:  n = 1
Output: 1
```

```
Input:  n = 6
Output: 8  // 0, 1, 1, 2, 3, 5, 8
```

```
Input:  n = 10
Output: 55
```

## Constraints

- `0 <= n <= 50`

## Notes

- Recursive solution is O(2^n) — aim for O(n) time and O(1) space with an iterative approach
