function isValidIP(str) {
  const symbols = str.split(".");

  if (symbols.length !== 4) return false;

  return symbols.every(
    (symbol) => /^(0|[1-9]\d{0,2})$/.test(symbol) && Number(symbol) <= 255,
  );
}

console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("123.888.67.89")); // false
console.log(isValidIP("1234")); // false
console.log(isValidIP("not ip")); // false
