function findCapitals(word: string): number[] {
  return [...word].reduce((result, char, index) => {
    if (/[A-Z]/.test(char)) {
      result.push(index);
    }
    return result;
  }, [] as number[]);
}

console.log(findCapitals("MaxCode")); // [0, 3]
