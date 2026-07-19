# Greet Developers

## Problem

Given a list of `Developer` objects, return a new list where each developer has an extra `greeting` field: `"Hi {firstName}, what do you like the most about {language}?"`.

```ts
interface Developer {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}
```

## Examples

```ts
greetDevelopers([
  { firstName: "Sofia", lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java" },
]);
// [{ firstName: "Sofia", ..., language: "Java", greeting: "Hi Sofia, what do you like the most about Java?" }]
```

## Constraints

- The original list and its objects must not be mutated — return new objects
- Every field from the original `Developer` object must be preserved, plus the new `greeting` field
- Order of the returned list matches the order of the input list

## Notes

- `list.map((developer) => ({ ...developer, greeting }))` is the right shape: the spread copies existing fields without mutating the source object, and `greeting` is appended alongside them
- Return type `(Developer & { greeting: string })[]` documents the shape precisely — an intersection type rather than a separate duplicated interface
