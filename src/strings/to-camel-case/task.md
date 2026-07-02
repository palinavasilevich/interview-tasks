# To Camel Case

## Problem

Convert a hyphen-separated or underscore-separated string into camelCase. The first word stays lowercase; each subsequent word has its first letter uppercased.

## Examples

```ts
toCamelCase("xml-http-request");   // "xmlHttpRequest"
toCamelCase("the_quick_brown_fox"); // "theQuickBrownFox"
toCamelCase("hello");              // "hello"
toCamelCase("");                   // ""
```

## Constraints

- Both `-` and `_` are valid separators
- First word remains unchanged
- Empty string returns an empty string

## Notes

- Split on `/[-_]/` to handle both separator types in one pass
- Guard against empty tokens from consecutive separators (`"foo--bar"`) before accessing `word[0]`
