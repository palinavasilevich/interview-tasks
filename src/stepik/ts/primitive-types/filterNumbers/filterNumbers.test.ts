import { describe, expect, it } from "vitest";

import { filterNumbers } from "./filterNumbers";

describe("filterNumbers", () => {
  it("Test #1", () => {
    expect(filterNumbers([1, "two", 3, "four", 5])).toEqual([1, 3, 5]);
  });

  it("Test #2", () => {
    expect(filterNumbers(["a", "b", "c"])).toEqual([]);
  });

  it("Test #3", () => {
    expect(filterNumbers([10, 20, 30])).toEqual([10, 20, 30]);
  });
});
