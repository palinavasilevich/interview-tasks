export function getField(dimension: number): Array<null[]> {
  return Array.from({ length: dimension }, () =>
    Array<null>(dimension).fill(null),
  );
}
