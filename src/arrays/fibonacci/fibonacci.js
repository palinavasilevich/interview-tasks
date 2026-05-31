export function fibonacci(n) {
  let first = 0;
  let second = 1;

  if (n === 0 || n === 1) return n;

  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
}

export function fibonacciV2(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciV2(n - 1) + fibonacciV2(n - 2);
  }
}
