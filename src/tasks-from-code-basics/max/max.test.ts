import { describe, expect, it } from "vitest";

import { max } from "./max";

describe("max", () => {
  it("should be 8", () => {
    expect(max(1, 3, 8)).toBe(8);
  });

  it("should be 10", () => {
    expect(max(10)).toBe(10);
  });

  it("should be 4", () => {
    expect(max(4, 1)).toBe(4);
  });
});
