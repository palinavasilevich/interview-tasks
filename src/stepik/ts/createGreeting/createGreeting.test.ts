import { describe, expect, it } from "vitest";

import { createGreeting } from "./createGreeting";

describe("createGreeting", () => {
  it("Test #1", () => {
    expect(createGreeting({ firstName: "Alex" })).toBe("Hello, Alex!");
  });

  it("Test #2", () => {
    expect(
      createGreeting({ firstName: "Palina", lastName: "Vasilevich" }),
    ).toBe("Hello, Palina Vasilevich!");
  });

  it("Test #2", () => {
    expect(createGreeting({ firstName: "Alice", age: 25 })).toBe(
      "Hello, Alice (25 лет)!",
    );
  });
});
