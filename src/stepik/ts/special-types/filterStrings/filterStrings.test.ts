import { describe, expect, it } from "vitest";

import { filterStrings } from "./filterStrings";

describe("filterStrings", () => {
  it("Test #1", () => {
    expect(filterStrings(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  it("Test #2", () => {
    expect(() => filterStrings(["a", 1, "c"])).toThrowError(
      "Incorrect value: 1",
    );
  });
});
