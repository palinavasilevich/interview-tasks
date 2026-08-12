import { describe, expect, it } from "vitest";

import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
  it("Test #1", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toStrictEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it("Test #2", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toStrictEqual([
      "a",
      "b",
      "c",
    ]);
  });
});
