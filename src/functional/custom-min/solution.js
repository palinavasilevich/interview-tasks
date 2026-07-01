function min(array, compareFn) {
  if (array.length === 0) throw new TypeError("Min of empty array");

  return array.reduce((minItem, item) =>
    compareFn(item, minItem) < 0 ? item : minItem,
  );
}

const students = [
  { name: "A", age: 15 },
  { name: "B", age: 8 },
  { name: "C", age: 23 },
];

console.log(min(students, (a, b) => a.age - b.age));

const cities = [
  { city: "Shanghai", country: "China", population: 24800000 },
  { city: "Beijing", country: "China", population: 21800000 },
  { city: "Istanbul", country: "Turkey", population: 15600000 },
  { city: "Karachi", country: "Pakistan", population: 15500000 },
  { city: "Mumbai", country: "India", population: 12400000 },
];

console.log(
  min(
    cities,
    (a, b) =>
      a.country.localeCompare(b.country) || a.city.localeCompare(b.city),
  ),
);
// { "city": "Beijing", "country": "China", "population": 21800000 }

console.log(min(cities, (a, b) => a.population - b.population));
// { "city": "Mumbai", "country": "India", "population": 12400000 },
