# Args Count

## Problem

Implement a function `argsCount` that returns the number of arguments it was called with.

## Examples

```js
argsCount();
// 0

argsCount(1, 2, 3);
// 3

argsCount("a", "b");
// 2

argsCount(1, null, undefined, true, "x");
// 5
```

## Constraints

- All argument types are valid — numbers, strings, booleans, `null`, `undefined`, objects, etc.
- Must work for any number of arguments including zero

## Notes

- Rest parameters (`...args`) collect all passed arguments into an array, making `.length` a natural fit
