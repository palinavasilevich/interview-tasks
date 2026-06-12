function onlyDigits(str: string): boolean {
  return /^\d+$/.test(str);
}

function onlyDigitsV2(str: string): boolean {
  return str.length > 0 && Array.from(str).every((ch) => ch >= "0" && ch <= "9");
}

function onlyDigitsV3(str: string): boolean {
  if (str.length === 0) return false;

  for (const ch of str) {
    if (!(ch >= "0" && ch <= "9")) {
      return false;
    }
  }

  return true;
}

console.log(onlyDigits("123")); // true
console.log(onlyDigits("qwerty")); // false
console.log(onlyDigits("5!")); // false
console.log(onlyDigits("2e2")); // false
console.log(onlyDigits("1 2 3")); // false
