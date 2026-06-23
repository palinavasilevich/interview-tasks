# classNames

## Problem

Implement a `classNames` function that takes any number of arguments and returns a string of space-separated class names. This is a simplified version of the popular [`classnames`](https://github.com/JedWatson/classnames) library.

Arguments can be strings, numbers, objects, arrays, or any falsy values.

- **Strings / numbers**: included as-is if truthy
- **Objects**: keys are included if their value is truthy
- **Arrays**: flattened recursively, each item processed by the same rules
- **Falsy values** (`null`, `undefined`, `false`, `0`, `""`): ignored

## Examples

```js
classNames("foo", "bar");                              // 'foo bar'
classNames("foo", { bar: true });                      // 'foo bar'
classNames({ "foo-bar": true });                       // 'foo-bar'
classNames({ "foo-bar": false });                      // ''
classNames({ foo: true }, { bar: true });              // 'foo bar'
classNames({ foo: true, bar: false, qux: true });      // 'foo qux'
classNames("a", ["b", { c: true, d: false }]);         // 'a b c'
classNames(null, false, "bar", undefined, "");         // 'bar'
classNames("foo", { bar: true, duck: false }, "baz");  // 'foo bar baz'
```

## Notes

- Object values are checked for truthiness, not strict `=== true`
- Arrays may be nested at any depth — use `flat(Infinity)` before filtering
- After flattening, filter out falsy primitives before processing objects
