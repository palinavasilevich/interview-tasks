# Accum

## Problem

Given a string, return a new string where each character is repeated according to its position (1-based), with the first letter capitalized and the rest lowercase. Segments are joined by `"-"`.

## Examples

```ts
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```

## Constraints

- Input contains only Latin letters (upper or lowercase)
- At least one character

## Notes

- At index `i`, the segment is: one uppercase char + `i` lowercase repetitions of the same char
- Handle casing per character in `map` — `char.toUpperCase() + char.toLowerCase().repeat(index)` — rather than transforming the whole string upfront
