# Find Vowels

## Problem

Given a string, return the number of vowels (`a, e, i, o, u`) it contains. The check must be case-insensitive.

## Examples

```ts
findVowels("hello");        // 2
findVowels("HELLO");        // 2
findVowels("why");          // 0
findVowels("aeiou");        // 5
findVowels("Hello World");  // 3
findVowels("");             // 0
```

## Constraints

- Input is a plain string (may include non-letter characters)
- Case-insensitive — uppercase vowels count too

## Notes

- Set-based approach: O(n) with O(1) lookup per character
- Regex approach: `str.match(/[aeiou]/gi)` returns `null` on no matches — guard with `|| []` or `?? 0`
