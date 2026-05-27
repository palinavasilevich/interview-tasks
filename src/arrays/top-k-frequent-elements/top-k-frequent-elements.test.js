import { describe, it, expect } from "vitest";
import { arrOfK } from "./top-k-frequent-elements.js";

describe("arrOfK", () => {
  it("returns the k most frequent elements", () => {
    expect(arrOfK([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  it("returns a single most frequent element", () => {
    expect(arrOfK([1], 1)).toEqual([1]);
  });

  it("handles ties by returning any valid k elements", () => {
    const result = arrOfK([1, 2], 2);
    expect(result).toHaveLength(2);
    expect(result).toContain(1);
    expect(result).toContain(2);
  });

  it("works when the most frequent element is not the smallest", () => {
    expect(arrOfK([3, 3, 3, 2, 2, 1], 2)).toEqual([3, 2]);
  });

  it("works with negative numbers", () => {
    expect(arrOfK([-1, -1, -2, -2, -2, 3], 1)).toEqual([-2]);
  });

  it("returns all elements when k equals array length of unique values", () => {
    const result = arrOfK([1, 2, 3], 3);
    expect(result).toHaveLength(3);
  });
});
