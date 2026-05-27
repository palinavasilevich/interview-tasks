export function groupAnagrams(arr) {
  const hashMap = new Map();

  for (const item of arr) {
    const sortedItem = item.split("").sort().join("");
    if (!hashMap.has(sortedItem)) hashMap.set(sortedItem, []);
    hashMap.get(sortedItem).push(item);
  }

  return Array.from(hashMap.values());
}
