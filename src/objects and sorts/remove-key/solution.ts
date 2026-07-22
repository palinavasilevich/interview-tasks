function removeKey(objects: Record<string, unknown>[], key: string) {
  return objects.map((obj) => {
    const newObj: Record<string, unknown> = {};

    for (const prop of Object.keys(obj)) {
      if (prop !== key) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  });
}

const users = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(removeKey(users, "age"));

const expected = [
  { name: "A", location: "Qwe" },
  { name: "B", location: "Asd" },
  { name: "C", location: "Zxc" },
];
