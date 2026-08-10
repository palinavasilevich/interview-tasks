import { describe, expect, it } from "vitest";

import { last } from "./last";

describe("last", () => {
  it("should be 'n'", () => {
    expect(last("John")).toBe("n");
  });
  it("should be ''", () => {
    expect(last("")).toBe("");
  });

  it("should be 1", () => {
    expect(last(1)).toBe(1);
  });

  it("should be 5", () => {
    expect(last(12345)).toBe(5);
  });
});
