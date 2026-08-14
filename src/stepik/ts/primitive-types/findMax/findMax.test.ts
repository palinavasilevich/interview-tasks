import { describe, expect, it } from "vitest";

import { findMax } from "./findMax";

describe("findMax", () => {
  it("Test #1", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  it("Test #2", () => {
    expect(findMax([-10, -5, -1])).toBe(-1);
  });

  it("Test #3", () => {
    expect(findMax([])).toBeNull;
  });
});
