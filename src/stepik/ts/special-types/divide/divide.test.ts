import { describe, expect, it } from "vitest";

import { divide } from "./divide";

describe("divide", () => {
  it("Test #1: divides two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("Test #2: throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrowError("Division by zero!");
  });
});
