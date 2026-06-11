function pivotIndex(arr: number[]): number {
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = arr.slice(i + 1).reduce((sum, num) => sum + num, 0);
    if (leftSum === rightSum) return i;

    leftSum += arr[i];
  }

  return -1;
}

function pivotIndexV2(arr: number[]): number {
  const totalSum = arr.reduce((sum, n) => sum + n, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) return i;
    leftSum += arr[i];
  }

  return -1;
}

const arr1 = [4, 2, 1, 3, 7, 6, 4];
const arr2 = [4, 2, -5, 3];

console.log(pivotIndexV2(arr1));
console.log(pivotIndexV2(arr2));
