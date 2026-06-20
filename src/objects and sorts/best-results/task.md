# Best Results

## Problem

Each student has unlimited attempts to pass an exam. Given an array of attempt objects — each with a student name, score, and date — return an array containing only the best attempt per student.

If a student achieved the same score in multiple attempts, keep the earliest one.

The result must be sorted by student name in ascending order.

## Examples

```ts
bestResults([
  { name: "Саша", score: 78, date: "28.09.2021" },
  { name: "Женя", score: 55, date: "01.10.2021" },
  { name: "Саша", score: 63, date: "30.09.2021" },
]);
// [
//   { name: "Женя", score: 55, date: "01.10.2021" },
//   { name: "Саша", score: 78, date: "28.09.2021" },
// ]

bestResults([
  { name: "Аня", score: 90, date: "10.01.2022" },
  { name: "Аня", score: 90, date: "05.01.2022" },
]);
// [{ name: "Аня", score: 90, date: "05.01.2022" }]  ← earlier date wins
```

## Constraints

- Score is an integer from 0 to 100
- Date format is `DD.MM.YYYY`
- On equal scores, return the attempt with the earlier date
- Result sorted by name ascending

## Notes

- `Date.parse("DD.MM.YYYY")` is unreliable across environments — reformat to `YYYY-MM-DD` before parsing
- Use `.localeCompare()` for string name sorting, not subtraction
