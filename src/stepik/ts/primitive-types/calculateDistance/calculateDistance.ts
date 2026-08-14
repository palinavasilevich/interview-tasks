export type Point = [number, number];

export function calculateDistance(point1: Point, point2: Point): number {
  const dx = point1[0] - point2[0];
  const dy = point1[1] - point2[1];

  return Math.sqrt(dx * dx + dy * dy);
}
