# Sort Odd Numbers

## Problem

Given an array of integers, sort the odd numbers in ascending order while keeping the even numbers in their original positions.

## Examples

```ts
sortArray([7, 1]);                        // [1, 7]
sortArray([5, 8, 6, 3, 4]);               // [3, 8, 6, 5, 4]
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
```

## Constraints

- Even numbers stay at their original indices
- Odd numbers are sorted ascending and placed back into the positions that odd numbers originally occupied
- Input array is not mutated

## Notes

- Collect the indices of all odd numbers in one pass
- Extract and sort the odd numbers separately
- Write sorted odds back into their original positions in a copy of the array
