# Create Phone Number

## Problem

Given a 9-digit number, return a formatted phone number string in the format `(XXX) XXX-XXX`.

## Examples

```ts
createPhoneNumber(123456789); // "(123) 456-789"
createPhoneNumber(555123456); // "(555) 123-456"
```

## Constraints

- Input is always a 9-digit positive integer
- No leading zeros (a `number` type drops them before the function runs)

## Notes

- Convert to string first, then use `slice` to split into the three groups: `(0,3)`, `(3,6)`, `(6)`
- Template literal makes the formatting straightforward
