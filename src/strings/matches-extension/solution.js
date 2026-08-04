function matchesExtension(filename, extension) {
  const index = filename.lastIndexOf(".");
  return index !== -1 && filename.slice(index + 1) === extension;
}

function matchesExtensionV2(filename, extension) {
  return filename.endsWith(`.${extension}`);
}

console.log(matchesExtension("report.pdf", "pdf")); // true
console.log(matchesExtension("report.html", "html")); // true
console.log(matchesExtension("report.html", "pdf")); // false
