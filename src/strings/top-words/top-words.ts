function topWords(words: string[], query: string, limit: number): string[] {
  const result = [] as string[];

  for (const word of words) {
    if (result.length >= limit) return result;

    if (word.toLowerCase().startsWith(query.toLowerCase())) {
      result.push(word);
    }
  }

  return result;
}

function topWordsV2(words: string[], query: string, limit: number): string[] {
  return words
    .filter((word) =>
      word.toLowerCase().startsWith(query.toLowerCase()),
    )
    .slice(0, limit);
}

const words = [
  "a",
  "able",
  "about",
  "absolute",
  "accept",
  "account",
  "achieve",
  "across",
  "act",
  "active",
  "actual",
  "add",
  "address",
  "Admit",
  "Advertise",
  "Affect",
  "AFFORD",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "agent",
  "ago",
  "agree",
];

console.log(topWords(words, "Af", 3)); // ['Affect', 'AFFORD', 'after']
console.log(topWords(words, "aga", 5)); // ['again', 'against']
