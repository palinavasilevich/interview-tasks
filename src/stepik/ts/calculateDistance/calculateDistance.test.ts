import { describe, expect, it } from "vitest";

import { calculateDistance, type Point } from "./calculateDistance";

describe("calculateDistance", () => {
  const p1: Point = [0, 0];
  const p2: Point = [3, 4];

  it("Test #1", () => {
    expect(calculateDistance(p1, p2)).toBe(5);
  });

  it("Test #2", () => {
    expect(calculateDistance([1, 1], [4, 5])).toBe(5);
  });
});
