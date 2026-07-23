const RESULT = Symbol("result");

function memo(fn) {
  const root = new Map();

  return function (...args) {
    let current = root;

    for (const arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }

      current = current.get(arg);
    }

    if (current.has(RESULT)) {
      return current.get(RESULT);
    }

    const result = fn.apply(this, args);
    current.set(RESULT, result);

    return result;
  };
}

function double(x) {
  for (let i = 0; i < 1e9; i++);
  return x * 2;
}

console.time("10");
console.log(double(10));
20;
console.timeEnd("10"); // ≈ 1s

const mDouble = memo(double);

console.time("A");
console.log(mDouble(1)); // 2
console.timeEnd("A"); // ≈ 1s

console.time("B");
console.log(mDouble(1)); // 2
console.timeEnd("B"); // ≈ 0.001s

console.time("C");
console.log(mDouble(3)); // 6
console.timeEnd("C"); // ≈ 1s

console.time("D");
console.log(mDouble(1)); // 2
console.timeEnd("D"); // ≈ 0.001s

console.time("E");
console.log(mDouble(3)); // 6
console.timeEnd("E"); // ≈ 0.001s
