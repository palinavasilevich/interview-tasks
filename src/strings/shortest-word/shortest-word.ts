export function shortestWord(str: string): number {
  if (!str) return 0;
  const words = str.split(" ");
  const wordLengths = words.map((word) => word.length);

  return wordLengths.reduce((min, currentLength) =>
    Math.min(min, currentLength),
  );
}

export function shortestWordV2(str: string): number {
  if (!str) return 0;
  const words = str.split(" ");
  let shortestLength = words[0].length;

  for (const word of words) {
    if (word.length < shortestLength) {
      shortestLength = word.length;
    }
  }

  return shortestLength;
}

export function shortestWordV3(str: string): number {
  if (!str) return 0;
  let min = Infinity;
  let currentLength = 0;

  for (const char of str) {
    if (char === " ") {
      min = Math.min(min, currentLength);
      currentLength = 0;
    } else {
      currentLength++;
    }
  }

  min = Math.min(min, currentLength);

  return min;
}
