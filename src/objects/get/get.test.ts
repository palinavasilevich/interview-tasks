import { describe, expect, it } from "vitest";

import { get } from "./get";

describe("get", () => {
  const obj = {
    a: {
      b: {
        c: "d",
      },
      e: "f",
    },
  };
  it("Test #1", () => {
    expect(get(obj, "a.b")).toEqual({ c: "d" });
  });

  it("Test #2", () => {
    expect(get(obj, "a.b.c")).toBe("d");
  });

  it("Test #1", () => {
    expect(get(obj, "a.b")).toEqual({ c: "d" });
  });

  it("Test #3", () => {
    expect(get(obj, "a.c")).toBeUndefined();
  });
});
