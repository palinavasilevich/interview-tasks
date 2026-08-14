import { describe, expect, it } from "vitest";

import { validateUser } from "./validateUser";

describe("validateUser", () => {
  it("Test #1", () => {
    expect(() => validateUser({ age: 16 })).toThrowError("Name is required!");
  });

  it("Test #2", () => {
    expect(() => validateUser({ name: "Alice", age: 16 })).toThrowError(
      "Age must be at least 18 years old!",
    );
  });

  it("Test #3", () => {
    expect(validateUser({ name: "Alex", age: 25 })).toBeTruthy();
  });
});
