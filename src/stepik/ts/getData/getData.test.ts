import { describe, expect, it } from "vitest";

import { getData, type User } from "./getData";

describe("getData", () => {
  const data: User = { id: 1, name: "Palina", age: 42 };
  it("Test #1", () => {
    expect(getData(data, true)).toBe("ID: 1, Name: Palina, Age: 42");
  });

  it("Test #2", () => {
    expect(getData(data, false)).toEqual({
      id: 1,
      name: "Palina",
      age: 42,
    });
  });
});
