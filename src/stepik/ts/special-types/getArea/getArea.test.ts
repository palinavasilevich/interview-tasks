import { describe, expect, it } from "vitest";

import { getArea } from "./getArea";

describe("getArea", () => {
  it("Test #1: calculates circle area", () => {
    expect(getArea({ kind: "circle", radius: 5 })).toBeCloseTo(Math.PI * 25);
  });

  it("Test #2: calculates square area", () => {
    expect(getArea({ kind: "square", side: 4 })).toBe(16);
  });

  it("Test #3: calculates rectangle area", () => {
    expect(getArea({ kind: "rectangle", width: 3, height: 5 })).toBe(15);
  });
});
