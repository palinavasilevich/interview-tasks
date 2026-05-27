export function leftPad(symbolCount, str) {
  return `${" ".repeat(Math.max(0, symbolCount - str.length))}${str}`;
}
