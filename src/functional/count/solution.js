const count = (() => {
  let amount = 0;

  function count() {
    return ++amount;
  }

  count.reset = () => {
    amount = 0;
  };

  return count;
})();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

count.reset();

console.log(count()); // 1
console.log(count()); // 2
