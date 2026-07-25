function sum(...promises) {
  return Promise.all(promises).then((values) =>
    values.reduce((sum, value) => sum + value, 0),
  );
}

async function sumV2(...promises) {
  const values = await Promise.all(promises);
  return values.reduce((sum, value) => sum + value, 0);
}

const p1 = new Promise((resolve) => resolve(1));
const p2 = new Promise((resolve) => resolve(2));
const p3 = new Promise((resolve) => resolve(3));

sum().then(console.log); // 0
sum(p1).then(console.log); // 1
sum(p1, p2).then(console.log); // 3
sum(p1, p2, p3).then(console.log); // 6
