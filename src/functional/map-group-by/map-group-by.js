function groupBy(items, callback) {
  const resultMap = new Map();

  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    const key = callback(currentItem, i);

    if (resultMap.has(key)) {
      resultMap.get(key).push(currentItem);
    } else {
      resultMap.set(key, [currentItem]);
    }
  }

  return resultMap;
}

function groupByV2(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});
}

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

const result = groupBy(words, (a) => a.length);

console.log(result);

// Map {
//   3 => ["the", "fox", "the", "dog"],
//   5 => ["quick", "brown", "jumps"],
//   4 => ["over", "lazy"],
// }

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

console.log(groupByV2(people, "age"));
// { 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }] }
