# Check Exam

## Problem

Given an array of correct answers and an array of student answers, calculate the student's score using these rules:

- **Correct answer**: +4 points
- **Wrong answer**: -1 point
- **Blank answer** (`""`): 0 points (no penalty)
- **Final score cannot go below 0** — return `0` if the total is negative

## Examples

```ts
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]); // 6  → +4 -1 +4 -1
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]);  // 7  → +4 +4 -1  0
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]); // 16 → +4 +4 +4 +4
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]);  // 0  → 0 -1 -1 -1 → clamped
```

## Constraints

- Both arrays are the same length
- Student answers are either a letter string or `""` (blank)
- Minimum returned score is `0`

## Notes

- Clamp to 0 **after** the full reduce, not inside the loop — clamping mid-loop would prevent later correct answers from recovering a negative score
- Three mutually exclusive cases per question: correct / blank / wrong — model with early returns in the reducer
- `Math.max(0, score)` is cleaner than `if (score < 0) return 0`
