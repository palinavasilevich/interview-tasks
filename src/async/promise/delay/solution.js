function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function delayWithValue(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function randomDelay(value) {
  const ms = (Math.floor(Math.random() * 5) + 1) * 1000;

  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// await delay(7000);
// console.log("Done");

// delayWithValue(5000, "Hello").then(console.log);

randomDelay("A").then(console.log);
randomDelay("B").then(console.log);
randomDelay("C").then(console.log);
