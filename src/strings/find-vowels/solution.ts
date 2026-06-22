function findVowels(str: string): number {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);

  return str.split("").reduce((sum, letter) => {
    if (VOWELS.has(letter.toLowerCase())) {
      sum += 1;
    }
    return sum;
  }, 0);
}

function findVowelsV2(str: string): number {
  const vowels = str.replace(/[^aeiou]/gi, "");
  return vowels.length;
}

function findVowelsV3(str: string): number {
  return (str.match(/[aeiou]/gi) || []).length;
}
