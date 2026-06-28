function sum(p1, p2) {
  return Promise.all([p1, p2]).then(([first, second]) => first + second);
}

async function sumAsync(p1, p2) {
  const [first, second] = await Promise.all([p1, p2]);
  return first + second;
}

const p1 = new Promise((resolve) => resolve(1));
const p2 = new Promise((resolve) => resolve(2));

sum(p1, p2).then((result) => {
  console.log(result); // 3
});

sumAsync(p1, p2).then((result) => {
  console.log(result); // 3
});
