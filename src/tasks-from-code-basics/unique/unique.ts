export function unique(
  numbers: Array<number | string>,
): Array<number | string> {
  return [...new Set(numbers)];
}

function uniqueV2(numbers: (number | string)[]): (number | string)[] {
  const initial: (string | number)[] = [];

  return numbers.reduce((acc, current) => {
    if (!acc.includes(current)) {
      acc.push(current);
    }

    return acc;
  }, initial);
}
