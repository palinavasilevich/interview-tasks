function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return function (...newArgs) {
    const allArgs = [...args, ...newArgs];

    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    }

    return curry(fn, ...allArgs);
  };
}

function sum(a, b, c, d, e, f, g, h, j) {
  return a + b + c + d + e + f + g + h + j;
}

const res = curry(sum, 1)(2, 3, 4)(5, 6)()(7)(8, 9);
console.log(res); // 45

const res2 = curry(sum, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log2(res2); // 45
