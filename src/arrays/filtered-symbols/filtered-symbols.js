export function filteredSymbols(arr) {
  let result = "";

  const sortedArr = arr.toSorted((a, b) => a.order - b.order);

  for (const item of sortedArr) {
    const { expired, value } = item;

    if (!expired) {
      const reversedValue = value.split("").reverse().join("");
      result += reversedValue;
    }
  }

  return [...new Set(result.split(""))].join("");
}

export function filteredSymbolsV2(arr) {
  const validItems = arr
    .filter((item) => !item.expired)
    .toSorted((a, b) => a.order - b.order)
    .flatMap((symbol) => symbol.value.split("").reverse());

  const uniqueChars = [];
  const seen = new Set();

  for (const char of validItems) {
    if (!seen.has(char)) {
      seen.add(char);
      uniqueChars.push(char);
    }
  }

  return uniqueChars.join("");
}
