import { describe, expect, it } from "vitest";

import { truncate } from "./truncate";

describe("truncate", () => {
  it("Test #1", () => {
    expect(truncate("Hello, everyone!!!", 5)).toBe("Hello...");
  });

  it("Test #2", () => {
    expect(truncate("Some", 10)).toBe("Some");
  });

  it("Test #3", () => {
    expect(truncate("Some text!", 5)).toBe("Some ...");
  });
});
