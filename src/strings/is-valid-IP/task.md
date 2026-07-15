# Is Valid IP

## Problem

Given a string, return `true` if it's a valid IPv4 address, `false` otherwise.

A valid IPv4 address consists of exactly 4 decimal octets separated by dots. Each octet must be:

- Composed only of digits `0-9` (no signs, whitespace, hex, or scientific notation)
- In the range `0`–`255`
- Free of leading zeros (`"0"` is fine, `"00"` and `"01"` are not)

## Examples

```js
isValidIP("123.45.67.89");    // true
isValidIP("255.255.255.255"); // true
isValidIP("0.0.0.0");         // true
isValidIP("123.888.67.89");   // false — 888 out of range
isValidIP("1234");            // false — not 4 parts
isValidIP("1..1.1");          // false — empty octet
isValidIP("01.2.3.4");        // false — leading zero
isValidIP("1e2.1.1.1");       // false — not a plain digit string
isValidIP("not ip");          // false
```

## Constraints

- Splitting on `.` must yield exactly 4 non-empty parts
- Each part must match `/^\d{1,3}$/` before checking its numeric range — don't rely on `Number()`/unary `+` coercion alone, since it silently accepts `""` (→ `0`), whitespace, `"+1"`, `"0x1"`, and `"1e2"`
- Reject parts with leading zeros unless the part is exactly `"0"`

## Notes

- A regex per octet is simplest: `/^(0|[1-9]\d{0,2})$/` combined with a `Number(part) <= 255` check
- Alternatively, one full-string regex can validate the whole address in a single test
