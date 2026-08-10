import { describe, expect, it } from "vitest";

import { unique } from "./unique";

describe("unique", () => {
  it("should be []", () => {
    expect(unique([])).toEqual([]);
  });

  it("should be [2, 3, -100]", () => {
    expect(unique([2, 3, -100, -100, -100])).toEqual([2, 3, -100]);
  });

  it('should be ["as", "good", "as", "it", "gets"]', () => {
    expect(unique(["as", "good", "as", "it", "gets"])).toEqual([
      "as",
      "good",
      "it",
      "gets",
    ]);
  });

  it("should be [1, 3, 'oops!']", () => {
    expect(unique([1, 1, 3, "oops!"])).toEqual([1, 3, "oops!"]);
  });
});
