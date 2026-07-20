function zip(arr1, arr2, callback) {
  const length = Math.min(arr1.length, arr2.length);
  return arr1.slice(0, length).map((item, index) => callback(item, arr2[index]));
}

console.log(zip([1, 2, 3], [5, 6, 7], (a, b) => a * b));
// [5, 12, 21]

console.log(zip(["abc", "f", "qw"], [1, 6, 2, 9, 3], (x, i) => x.repeat(i)));
// ["abc", "ffffff", "qwqw"]
