export function getSquares(n) {
  return Array.from({ length: n }, (_, index) => index * index);
}
