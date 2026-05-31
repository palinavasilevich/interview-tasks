export function findMissingNumber(nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    if (current - prev !== 1) return current - 1;

    prev = current;
  }

  return prev + 1;
}

export function findMissingNumberV2(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}
