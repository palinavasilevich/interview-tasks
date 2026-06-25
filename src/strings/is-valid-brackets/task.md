# Is Valid Brackets

## Problem

Given a string, return `true` if all brackets are correctly opened and closed in the right order, `false` otherwise.

Supported bracket types: `()`, `{}`, `[]`, `<>`

## Examples

```js
isValidBrackets("()(()())");          // true
isValidBrackets("(([]{}[<>[{}]]))");  // true
isValidBrackets("((())");             // false — unclosed bracket
isValidBrackets("()))");              // false — extra closing bracket
isValidBrackets("[(])");              // false — wrong nesting order
isValidBrackets("");                  // true
```

## Constraints

- Only bracket characters affect the result; any other characters are ignored
- Brackets must be properly nested — interleaved brackets like `[(])` are invalid

## Notes

- Classic stack approach: push open brackets, pop and verify on close brackets
- Use a match map `{ ")": "(", ... }` for O(1) pair lookup instead of index-based array search
- After confirming `stack.at(-1) === MATCHING[char]`, use `pop()` — no need for `indexOf` + `splice`
- Overall complexity: O(n) time, O(n) space
