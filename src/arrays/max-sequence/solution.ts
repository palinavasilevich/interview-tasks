function maxSequence(arr: number[]): number {
  let maxGlobal = 0;
  let maxCurrent = 0;

  for (const num of arr) {
    maxCurrent = Math.max(0, maxCurrent + num);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }

  return maxGlobal;
}

function maxSequenceV2(arr: number[]): number {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = arr[i];
    result = Math.max(result, currentSum);
    for (let j = i + 1; j < arr.length; j++) {
      currentSum += arr[j];
      result = Math.max(result, currentSum);
    }
  }

  return result;
}
