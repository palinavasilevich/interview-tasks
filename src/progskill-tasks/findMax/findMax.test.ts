import { describe, expect, it } from "vitest";

import { findMax } from "./findMax";

describe("findMax", () => {
  it("should be 9", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  it("should be -5", () => {
    expect(findMax([-10, -5, -20])).toBe(-5);
  });

  it("should be 42", () => {
    expect(findMax([42])).toBe(42);
  });
});
