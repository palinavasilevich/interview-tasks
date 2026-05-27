import { describe, it, expect } from "vitest";
import { twoSum } from "./two-sum.js";

describe("twoSum", () => {
  it("returns correct indices for a basic case", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("works when the answer is not at the start", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("works with duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("works with negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});
