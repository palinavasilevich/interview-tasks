export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function reverseStringV2(str: string): string {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const currentSymbol = str[i];
    result += currentSymbol;
  }

  return result;
}
