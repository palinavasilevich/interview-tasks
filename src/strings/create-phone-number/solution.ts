function createPhoneNumber(number: number): string {
  const str = number.toString();
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 9)}`;
}
