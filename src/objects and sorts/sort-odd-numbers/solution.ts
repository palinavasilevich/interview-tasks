function sortOddNumbers(array: number[]): number[] {
  const result = [...array];
  const oddNumberIndexes: number[] = [];

  array.forEach((num, index) => {
    if (num % 2 !== 0) {
      oddNumberIndexes.push(index);
    }
  });

  const sortedOddNumbers = array
    .filter((num) => num % 2 !== 0)
    .toSorted((a, b) => a - b);

  sortedOddNumbers.forEach((num, index) => {
    const currentOddIndex = oddNumberIndexes[index];

    result[currentOddIndex] = num;
  });

  return result;
}

function sortOddNumbersV2(array: number[]): number[] {
  const sortedOdds = array
    .filter((num) => num % 2 !== 0)
    .toSorted((a, b) => a - b);
  let currentIndex = 0;

  return array.map((num) => (num % 2 !== 0 ? sortedOdds[currentIndex++] : num));
}
