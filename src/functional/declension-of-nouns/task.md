# Declension of Nouns

## Problem

Implement a `plural(forms)` higher-order function. `forms` is a 3-element array holding the three Russian declension forms of a noun: `[one, few, many]` (e.g. `["корова", "коровы", "коров"]`).

`plural` returns a function that takes a number and returns the correctly declined form for that number, following Russian pluralization rules.

## Examples

```js
const pluralCows = plural(["корова", "коровы", "коров"]);

pluralCows(1);  // "корова"
pluralCows(2);  // "коровы"
pluralCows(5);  // "коров"
pluralCows(11); // "коров"
pluralCows(21); // "корова"

const pluralProblems = plural(["задача", "задачи", "задач"]);

pluralProblems(7);  // "задач"
pluralProblems(31); // "задача"
pluralProblems(52); // "задачи"
```

## Constraints

- `forms[0]` is used when the number ends in `1`, except when it ends in `11` (11, 111, 211, ...)
- `forms[1]` is used when the number ends in `2`-`4`, except when it ends in `12`-`14` (12, 13, 14, 112, ...)
- `forms[2]` is used otherwise, including all numbers ending in `11`-`14`

## Notes

- Checking `num % 10` alone is not enough — the teens (11-14, 111-114, ...) are irregular and always take `forms[2]` regardless of their last digit. This requires also checking `num % 100` to detect the 11-14 range before falling back to the `num % 10` check.
- Current `solution.js` only checks `num % 10`, so it misclassifies the teens, e.g. `pluralCows(11)` returns `"корова"` instead of `"коров"`, and `pluralCows(12)` returns `"коровы"` instead of `"коров"`. Worth fixing.
