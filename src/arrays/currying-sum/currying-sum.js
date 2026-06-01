export function currySum(a) {
  return (b) => {
    if (b === undefined) return a;
    return currySum(a + b);
  };
}

export function currySumV2(initialValue = 0) {
  let total = initialValue;

  function sum(value) {
    if (value === undefined) {
      return total;
    }

    total += value;
    return sum;
  }

  return sum;
}
