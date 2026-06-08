function flattenArr(arr, depth = 1) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenArr(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

function flattenArrStack(arr, depth = 1) {
  const stack = arr.map((item) => [item, depth]);
  const result = [];

  while (stack.length) {
    const [item, currentDepth] = stack.pop();

    if (Array.isArray(item) && currentDepth > 0) {
      stack.push(...item.map((i) => [i, currentDepth - 1]).reverse());
    } else {
      result.push(item);
    }
  }
  return result;
}
