export function arrOfK(nums, k) {
  const hash = {};

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }

  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => Number(item[0]));
}
