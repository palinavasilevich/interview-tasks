function query(...args) {
  return (data) => {
    let result = [...data];

    for (const fn of args) {
      result = fn.apply(result);
    }

    return result;
  };
}

function where(key, value) {
  return function () {
    return this.filter((item) => item[key] === value);
  };
}

function sort(key) {
  return function () {
    return this.toSorted((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));
  };
}

const data = [
  { id: 1, name: "John", surname: "Doe", age: 34 },
  { id: 2, name: "John", surname: "Doe", age: 33 },
  { id: 3, name: "John", surname: "Doe1", age: 35 },
  { id: 4, name: "Mike", surname: "Doe", age: 35 },
];

const search = query(
  where("name", "John"),
  where("surname", "Doe"),
  sort("age"),
);

console.log(search(data));

// [
//   { id: 2, name: "John", surname: "Doe", age: 33 },
//   { id: 1, name: "John", surname: "Doe", age: 34 },
// ]
