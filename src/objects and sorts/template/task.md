# Template

## Problem

Implement a `template(str, dict)` function that replaces `{key}` placeholders in a string with values from a dictionary. If a placeholder's key is not found in the dictionary, leave it as-is.

The dictionary can be a plain object or an array (array indices become keys: `{0}`, `{1}`, ...).

## Examples

```js
template(
  "Купить {size}-комнатную квартиру в городе {city} за {price} млн рублей",
  { size: 2, city: "Тверь", price: 7 }
);
// "Купить 2-комнатную квартиру в городе Тверь за 7 млн рублей"

template("CEO {0}, CTO {1} и CFO {2}", ["Вася", "Маша", "Петя"]);
// "CEO Вася, CTO Маша и CFO Петя"

template(
  "Купить {size}-комнатную квартиру в городе {city} за {price} млн рублей",
  { size: 2, price: 7 }
);
// "Купить 2-комнатную квартиру в городе {city} за 7 млн рублей"  ← {city} kept
```

## Constraints

- Placeholder format is `{key}` where key is one or more word characters (`\w+`)
- Missing keys are left unchanged in the output

## Notes

- Use `str.replace(/\{(\w+)\}/g, ...)` — targets exact `{key}` patterns, avoiding false matches if the key string appears elsewhere in the template
- `indexOf(key)` without braces can match the key inside unrelated substrings or inside previously-inserted replacement values
- `key in dict` correctly handles missing keys without needing to check the dict's own keys separately
