export function differenceInAges(ages) {
  let min = ages[0];
  let max = ages[0];

  for (let i = 1; i < ages.length; i++) {
    const current = ages[i];

    if (current < min) {
      min = current;
    }

    if (current > max) {
      max = current;
    }
  }

  return [min, max, max - min];
}

export function differenceInAgesV2(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]));
console.log(differenceInAges([25]));
