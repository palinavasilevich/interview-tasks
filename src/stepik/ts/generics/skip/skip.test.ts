import { describe, expect, it } from "vitest";

import { skip } from "./skip";

describe("skip", () => {
  it("Test #1", () => {
    expect(skip([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
  });

  it("Test #2", () => {
    expect(skip(["a", "b", "c", "d"], 1)).toEqual(["b", "c", "d"]);
  });
});
