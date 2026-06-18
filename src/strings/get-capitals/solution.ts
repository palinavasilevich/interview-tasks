function getCapitals(word: string): number[] {
  return [...word].reduce((result, letter, index) => {
    if (/[A-Z]/.test(letter)) result.push(index);
    return result;
  }, [] as number[]);
}

function getCapitalsV2(word: string): number[] {
  return [...word].reduce((result, letter, index) => {
    if (letter === letter.toUpperCase()) {
      result.push(index);
    }

    return result;
  }, [] as number[]);
}

console.log(getCapitals("CodEWaRs"));
