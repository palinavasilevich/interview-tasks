# Even or Odd

## Problem

Given an integer, return `"Even"` if it is even, or `"Odd"` if it is odd.

## Examples

```ts
evenOrOdd(2);   // "Even"
evenOrOdd(3);   // "Odd"
evenOrOdd(0);   // "Even"
evenOrOdd(-4);  // "Even"
evenOrOdd(-7);  // "Odd"
```

## Constraints

- Input is an integer (positive, negative, or zero)
- `%` operator on negative numbers in JS returns a negative remainder — but `% 2 === 0` still correctly identifies even numbers

## Notes

- Return type `"Even" | "Odd"` is more precise than `string`
