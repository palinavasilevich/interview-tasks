# Извлечение нод по типу

## Problem

Дана древовидная структура следующего формата:
const tree = {
type: "nested",
children: [
{ type: "added", value: 42 },
{
type: "nested",
children: [{ type: "added", value: 43 }],
},
{ type: "added", value: 44 },
],
};

Необходимо написать функцию getNodes(tree, type), которая возвращает все ноды в порядке следования, соответствующие переданному типу. Глубина вложенности любая.

## Examples

```

Input 1: { "type": "nested", "children": [ { "type": "nested", "children": [ { "type": "added", "value": 50 } ] }, { "type": "added", "value": 51 } ] }
Output 1: [ { "type": "added", "value": 50 }, { "type": "added", "value": 51 } ]

Input 2: { "type": "nested", "children": [ { "type": "nested", "children": [ { "type": "nested", "children": [ { "type": "added", "value": 60 } ] } ] } ] }
Output 2: [ { "type": "added", "value": 60 } ]


Input 3: { "type": "nested", "children": [ { "type": "added", "value": 42 }, { "type": "nested", "children": [ { "type": "added", "value": 43 } ] }, { "type": "added", "value": 44 } ] }
Output 3: [ { "type": "added", "value": 42 }, { "type": "added", "value": 43 }, { "type": "added", "value": 44 } ]

```
