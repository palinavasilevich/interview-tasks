function findShort(str: string): string {
  return str
    .split(" ")
    .reduce((shortest, word) =>
      word.length < shortest.length ? word : shortest,
    );
}

function findShortV2(str: string): string {
  return str.split(" ").sort((a, b) => a.length - b.length)[0];
}
