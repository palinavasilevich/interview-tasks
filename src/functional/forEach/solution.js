function forEach(array, callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < array.length; i++) {
    if (!(i in array)) {
      continue;
    }
    callback.call(thisArg, array[i], i, array);
  }
}

forEach([1, 2, 3], (x) => {
  console.log(x ** 2);
});

// console.log выполняется три раза
// со значениями 1, 4, 9
