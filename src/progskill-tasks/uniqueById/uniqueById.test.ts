import { describe, expect, it } from "vitest";

import { uniqueById } from "./uniqueById";

describe("uniqueById", () => {
  it("Test #1", () => {
    const items = [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 1, name: "C" },
      { id: 3, name: "D" },
      { id: 2, name: "E" },
    ];

    expect(uniqueById(items)).toStrictEqual([{ id: 3, name: "D" }]);
  });
});
