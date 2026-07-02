function toCamelCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((word, index) =>
      index !== 0 && word ? word[0].toUpperCase() + word.slice(1) : word,
    )
    .join("");
}

console.log(toCamelCase("xml-http-request")); // "xmlHttpRequest"
