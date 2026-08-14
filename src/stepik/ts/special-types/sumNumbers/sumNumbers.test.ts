import { describe, expect, it } from "vitest";

import { sumNumbers } from "./sumNumbers";

describe("sumNumbers", () => {
  it("Test #1", () => {
    expect(sumNumbers([1, 2, 3, 4])).toBe(10);
  });

  it("Test #2", () => {
    expect(sumNumbers([1, "2", 3])).toBeNull();
  });

  it("Test #3", () => {
    expect(sumNumbers({ a: 1, b: 2 })).toBeNull();
  });

  it("Test #4", () => {
    expect(sumNumbers("Some Text")).toBeNull();
  });
});
