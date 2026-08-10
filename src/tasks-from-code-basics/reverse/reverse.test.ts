import { describe, expect, it } from "vitest";

import { reverse, reverseV2 } from "./reverse";

describe("reverse", () => {
  it("Test #1", () => {
    expect(reverse([])).toEqual([]);
  });

  it("Test #2", () => {
    expect(reverse([1, 2])).toEqual([2, 1]);
  });

  it("Test #3", () => {
    expect(reverse([8, 3, 9])).toEqual([9, 3, 8]);
  });
});

describe("reverseV2", () => {
  it("Test #1", () => {
    expect(reverse([])).toEqual([]);
  });

  it("Test #2", () => {
    expect(reverse([1, 2])).toEqual([2, 1]);
  });

  it("Test #3", () => {
    expect(reverse([8, 3, 9])).toEqual([9, 3, 8]);
  });
});
