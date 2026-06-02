export function existsDuplicate(numbers) {
  const unique = new Set();

  for (const num of numbers) {
    if (unique.has(num)) return true;
    unique.add(num);
  }

  return false;
}
