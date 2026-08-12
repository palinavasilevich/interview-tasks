import { describe, expect, it } from "vitest";

import { isDivisibleBy } from "./isDivisibleBy";

describe("isDivisibleBy", () => {
  it("should be true", () => {
    expect(isDivisibleBy(3, 1, 3)).toBeTruthy;
  });

  it("should be true", () => {
    expect(isDivisibleBy(12, 2, 6)).toBeTruthy;
  });

  it("should be false", () => {
    expect(isDivisibleBy(100, 5, 3)).toBeFalsy;
  });

  it("should be false", () => {
    expect(isDivisibleBy(12, 7, 5)).toBeFalsy;
  });
});
