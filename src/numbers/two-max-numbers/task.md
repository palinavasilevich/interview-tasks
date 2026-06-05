# Two Max Numbers

## Problem

Дан массив с числами. Верните два наибольших **различных** числа из этого массива в порядке убывания.

Гарантируется, что в массиве находятся хотя бы два различных элемента.

## Examples

```ts
twoMaxNumbers([8, 5, 6, 6, 10, 3, 19, 19, 10, 19, 7]); // [19, 10]
twoMaxNumbers([1, 2, 3]);                                // [3, 2]
twoMaxNumbers([5, 5, 5, 3]);                             // [5, 3]
```

## Constraints

- `2 <= numbers.length <= 10^4`
- Array contains at least two distinct values
- Return type is a tuple `[number, number]`

## Notes

- V1: sort descending + `Set` for deduplication — O(n log n)
- V2: find max → filter it out → find second max — O(n); prefer `reduce` over spread for large arrays to avoid stack overflow
