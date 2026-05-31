export function oddSort(arr) {
  const result = [...arr];
  const oddIds = [];
  const oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current % 2 !== 0) {
      oddIds.push(i);
      oddNumbers.push(current);
    }
  }

  const sortedOddNumbers = oddNumbers.toSorted((a, b) => a - b);

  for (let i = 0; i < sortedOddNumbers.length; i++) {
    const current = sortedOddNumbers[i];
    const index = oddIds[i];
    result[index] = current;
  }

  return result;
}

export function oddSortV2(arr) {
  const sorted = arr.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  let idx = 0;
  return arr.map((n) => (n % 2 !== 0 ? sorted[idx++] : n));
}
