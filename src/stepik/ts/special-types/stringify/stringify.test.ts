import { describe, expect, it } from "vitest";

import { stringify } from "./stringify";

describe("stringify", () => {
  it("Test #1", () => {
    expect(stringify("Hello")).toBe("Hello");
  });

  it("Test #2", () => {
    expect(stringify(42)).toBe("42");
  });

  it("Test #3", () => {
    expect(stringify({ a: 42 })).toBe("[object Object]");
  });

  it("Test #4", () => {
    expect(stringify(null)).toBe("empty");
  });

  it("Test #5", () => {
    expect(stringify(undefined)).toBe("empty");
  });
});
