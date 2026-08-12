import { describe, expect, it } from "vitest";

import { sumPositive } from "./sumPositive";

describe("sumPositive", () => {
  it("should be 20", () => {
    expect(sumPositive([1, -4, 7, 12])).toBe(20);
  });

  it("should be 0", () => {
    expect(sumPositive([-1, -2, -3])).toBe(0);
  });

  it("should be 0", () => {
    expect(sumPositive([])).toBe(0);
  });
});
