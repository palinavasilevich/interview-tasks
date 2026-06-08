function searchValue(matrix: string[][], min: number): boolean {
  for (const row of matrix) {
    for (const word of row) {
      if (word.length >= min) return true;
    }
  }

  return false;
}

function searchValueV2(matrix: string[][], min: number): boolean {
  return matrix.flat().some((word) => word.length >= min);
}
