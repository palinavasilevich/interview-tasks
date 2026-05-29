export function getPrize(guessScore, realScore) {
  const [guessA, guessB] = guessScore.split(":").map(Number);
  const [realA, realB] = realScore.split(":").map(Number);

  if (guessA === realA && guessB === realB) {
    return 2;
  }

  const getOutcome = (a, b) => Math.sign(a - b);

  if (getOutcome(guessA, guessB) === getOutcome(realA, realB)) {
    return 1;
  }

  return 0;
}

console.log(getPrize("1:2", "1:2")); // -> 2 (точный счёт)
console.log(getPrize("2:1", "5:0")); // -> 1 (исход: победа А)
console.log(getPrize("3:0", "2:2")); // -> 0 (не угадал)
