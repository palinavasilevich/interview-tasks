function filterHomogenous(arrays) {
  return arrays.filter(
    (arr) => arr.length > 0 && arr.every((item) => typeof item === typeof arr[0])
  );
}

console.log(
  filterHomogenous([[1, 2, 3], [], [5, true, 8], ["qwe", "yyy"], ["uio", 6]]),
); // [[1, 2, 3],  ["qwe", "yyy"]]
