function plural([one, few, many]) {
  return (num) => {
    if (num % 10 === 1 && num !== 11) {
      return one;
    }
    if (num > 10 && num < 15) {
      return many;
    }
    if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
      return few;
    }
    return many;
  };
}

function pluralV2(arr) {
  return function (num) {
    const mod100 = num % 100;
    if (mod100 >= 11 && mod100 <= 14) return arr[2];

    const mod10 = num % 10;
    if (mod10 === 1) return arr[0];

    if (mod10 > 1 && mod10 < 5) return arr[1];

    return arr[2];
  };
}

const pluralCows = plural(["корова", "коровы", "коров"]);

console.log(1, pluralCows(1)); // "корова"
console.log(2, pluralCows(2)); // "коровы"
console.log(5, pluralCows(5)); // "коров"

const pluralProblems = plural(["задача", "задачи", "задач"]);

console.log(7, pluralProblems(7)); //  "задач"
console.log(31, pluralProblems(31)); // "задача"
console.log(52, pluralProblems(52)); // "задачи"
