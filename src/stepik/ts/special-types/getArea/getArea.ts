/*
 * Task 5 — never in exhaustive checks
 * Create a function so that TypeScript guarantees that all possible variants are handled.
 */

export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

export function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default: {
      const exhaustiveCheck: never = shape;
      throw new Error(`Unknown figure: ${exhaustiveCheck}`);
    }
  }
}
