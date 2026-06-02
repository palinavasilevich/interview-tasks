export function findDeepestMaxElement(nums) {
  const items = [];

  function traverse(arr, depth) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        traverse(item, depth + 1);
      } else {
        items.push({ depth, value: item });
      }
    }
  }

  traverse(nums, 1);

  const maxDepth = Math.max(...items.map((item) => item.depth));
  return Math.max(
    ...items
      .filter((item) => item.depth === maxDepth)
      .map((item) => item.value),
  );
}
