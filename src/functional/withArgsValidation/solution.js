function withArgsValidation(fn) {
  return function (...args) {
    if (args.length !== fn.length) {
      throw new Error("Invalid number of arguments");
    }

    return fn.apply(this, args);
  };
}

function sum(a, b) {
  return a + b;
}

const sumWithValidation = withArgsValidation(sum);

// возвращает значение 3
console.log(sumWithValidation(1, 2));

// бросает ошибку с сообщением
// "Invalid number of arguments"
console.log(sumWithValidation(5));
