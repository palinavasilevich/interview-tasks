function sortBy(array, key) {
  if (array.length === 0) return [];
  const value = array[0][key];

  switch (typeof value) {
    case "number":
      return array.toSorted((a, b) => a[key] - b[key]);

    case "string":
      return array.toSorted((a, b) => a[key].localeCompare(b[key]));

    default:
      throw new Error("Invalid key value");
  }
}

const points = [
  { x: 5, y: 8 },
  { x: 9, y: 0 },
  { x: 1, y: 4 },
  { x: -6, y: 12 },
];

console.log(sortBy(points, "x"));
// [{x: -6, y: 12}, {x: 1, y: 4}, {x: 5, y: 8}, {x: 9, y: 0}]

console.log(sortBy(points, "y"));
// [{x: 9, y: 0}, {x: 1, y: 4}, {x: 5, y: 8}, {x: -6, y: 12}]

const users = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(sortBy(users, "location"));
// [
//   { name: "B", age: 54, location: "Asd" },
//   { name: "A", age: 11, location: "Qwe" },
//   { name: "C", age: 23, location: "Zxc" },
// ]

console.log(sortBy(users, "age"));
// [
//   { name: "A", age: 11, location: "Qwe" },
//   { name: "C", age: 23, location: "Zxc" },
//   { name: "B", age: 54, location: "Asd" },
// ]
