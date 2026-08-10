export type Point = [number, number, number];

export function isTheSamePoint(p1: Point, p2: Point): boolean {
  for (let i = 0; i < 3; i++) {
    if (p1[i] !== p2[i]) return false;
  }
  return true;
}

export function isTheSamePointV2(p1: Point, p2: Point): boolean {
  return p1.every((el, index) => el === p2[index]);
}
