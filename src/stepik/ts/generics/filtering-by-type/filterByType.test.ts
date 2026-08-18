import { describe, expect, it } from "vitest";

import { filterByType } from "./filterByType";

describe("filtering-by-type", () => {
  const mixed = [1, "hello", 2, "world", 3, true, 4];

  it("Test #1", () => {
    const isNumber = (item: unknown): item is number =>
      typeof item === "number";

    expect(filterByType(mixed, isNumber)).toEqual([1, 2, 3, 4]);
  });

  it("Test #2", () => {
    const isString = (item: unknown): item is string =>
      typeof item === "string";

    expect(filterByType(mixed, isString)).toEqual(["hello", "world"]);
  });
});
