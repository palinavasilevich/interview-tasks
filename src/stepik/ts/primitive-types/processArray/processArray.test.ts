import { describe, expect, it } from "vitest";

import { processArray } from "./processArray";

describe("processArray", () => {
  it("Test #1", () => {
    expect(processArray([1, 2, 3, 4], (x) => x * 2)).toStrictEqual([
      2, 4, 6, 8,
    ]);
  });

  it("Test #2", () => {
    expect(processArray([1, 2, 3, 4], (x) => x.toString())).toStrictEqual([
      "1",
      "2",
      "3",
      "4",
    ]);
  });

  it("Test #3", () => {
    expect(processArray([1, 2, 3, 4], (x) => x > 2)).toStrictEqual([
      false,
      false,
      true,
      true,
    ]);
  });
});
