# Full Name

## Problem

Implement a `Person` class with `firstName` and `lastName` properties and a computed `fullName` accessor that keeps them in sync.

- Reading `fullName` returns `"firstName lastName"`
- Writing to `fullName` updates both `firstName` and `lastName`

## Examples

```js
const p = new Person("Naomi", "Wang");

p.firstName; // "Naomi"
p.lastName;  // "Wang"
p.fullName;  // "Naomi Wang"

p.firstName = "John";
p.fullName;  // "John Wang"

p.fullName = "Jane Smith";
p.firstName; // "Jane"
p.lastName;  // "Smith"
p.fullName;  // "Jane Smith"
```

## Constraints

- `fullName` must stay in sync automatically — no manual update required
- Setting an empty string should be a no-op

## Notes

- Class `get`/`set` syntax is the cleanest approach
- Alternative: constructor function with `Object.defineProperty` achieves the same result
- Setter only handles two-word names — extra words beyond the second are ignored
