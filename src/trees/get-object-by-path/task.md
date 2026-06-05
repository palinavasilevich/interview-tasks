# Get Object By Path

## Problem

Напишите функцию `getObjectByPath(obj, path)`, которая принимает объект и строку-путь, разделённую точками. Если путь существует — вернуть значение, иначе — `undefined`.

## Examples

```ts
getObjectByPath({ a: { b: { c: "d" } } }, "a.b.c"); // "d"
getObjectByPath({ a: { b: { c: "d" } } }, "a.b");   // { c: "d" }
getObjectByPath({ x: { y: { z: 42 } } }, "x.y.a");  // undefined
getObjectByPath({ x: { y: { z: 42 } } }, "x.y.a.b"); // undefined (not a crash)
```

## Constraints

- Path is a dot-separated string
- Object can be arbitrarily nested
- Return `undefined` for any non-existent path segment

## Notes

- Split path by `"."`, then traverse step by step
- Guard against `undefined`/`null` mid-traversal to avoid `TypeError`
- No need to clone the object — read-only traversal
- Return type should be `unknown`, not `string`, since any value can be returned
