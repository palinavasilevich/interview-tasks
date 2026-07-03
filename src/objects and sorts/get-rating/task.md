# Get Rating

## Problem

Given a `meet` object (person → score) and a `boss` name, calculate the average score where the boss's score counts **twice**. Return `"Nice Work Champ!"` if the average is above 5, otherwise `"Get Out Now!"`.

## Examples

```ts
rating(
  { katie: 5, laura: 3, saajid: 2, alex: 3, john: 2, mr: 0 },
  "laura"
);
// sum = 5 + (3 × 2) + 2 + 3 + 2 + 0 = 18
// average = 18 / 6 = 3 → "Get Out Now!"
```

## Constraints

- The boss is always present in the `meet` object
- The boss's score is added once normally and once as a bonus
- Divide by the number of people in `meet` (not people + 1)

## Notes

- Operator precedence trap: `total + meet[person] + person === boss` is parsed as `(total + meet[person] + person) === boss` — always `false`. Wrap the ternary condition in parentheses: `total + meet[person] + (person === boss ? meet[person] : 0)`
