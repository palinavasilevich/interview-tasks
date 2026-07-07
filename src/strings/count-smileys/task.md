# Count Smileys

## Problem

Given an array of strings, count how many are valid smileys.

A valid smiley is **2 or 3 characters** long with the following structure:

| Part | Characters |
|------|-----------|
| Eyes (required) | `:` or `;` |
| Nose (optional) | `-` or `~` |
| Mouth (required) | `)` or `D` |

Valid examples: `:)`, `:D`, `;)`, `;D`, `:-)`, `:-D`, `;~)`, `;~D`

## Examples

```ts
countSmileys([":-)", ";D", ".(", ")))"]); // 2
countSmileys([":)", ":(", ":D", ":O", ":;"]); // 2
countSmileys([";]", ":[", ";*", ":$", ";-D"]); // 1
countSmileys([]); // 0
```

## Constraints

- Strings longer or shorter than 2–3 characters are not valid smileys
- Match is case-sensitive

## Notes

- Destructuring only takes the first 3 chars — a length guard (`str.length !== 2 && str.length !== 3`) is required to reject longer strings
- Alternative: single regex — `/^[:;][-~]?[)D]$/`
