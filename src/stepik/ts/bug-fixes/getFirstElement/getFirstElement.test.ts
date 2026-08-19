import { describe, expect, it } from "vitest";

import { getFirstElement } from "./getFirstElement";

describe("getFirstElement", () => {
  it("Test #1", () => {
    expect(getFirstElement([1, 2, 3])).toBe(1);
  });

  it("Test #2", () => {
    expect(getFirstElement(["a", "b"])).toBe("a");
  });

  it("Test #3", () => {
    expect(getFirstElement(null)).toBeUndefined();
  });
});
