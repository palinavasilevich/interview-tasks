import { describe, expect, it } from "vitest";

import { processEntity } from "./processEntity";

describe("processEntity", () => {
  it("Test #1", () => {
    expect(processEntity({ id: 1, name: "Alice" })).toBe(
      "Processing entity: Alice (ID: 1)",
    );
  });

  it("Test #2", () => {
    expect(processEntity({ id: "1", name: "Alice" })).toBe("Invalid entity");
  });

  it("Test #3", () => {
    expect(processEntity({ name: "Alice" })).toBe("Invalid entity");
  });

  it("Test #4", () => {
    expect(processEntity(null)).toBe("Invalid entity");
  });
});
