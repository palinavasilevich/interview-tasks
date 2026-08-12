import { describe, expect, it } from "vitest";

import { getLengths } from "./getLengths";

describe("getLengths", () => {
  it("should be [4, 6, 3]", () => {
    expect(getLengths(["java", "script", "кек"])).toStrictEqual([4, 6, 3]);
  });

  it("should be [0]", () => {
    expect(getLengths([""])).toStrictEqual([0]);
  });

  it("should be []", () => {
    expect(getLengths([])).toStrictEqual([]);
  });
});
