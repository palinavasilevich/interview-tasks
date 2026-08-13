import { describe, expect, it } from "vitest";

import { findUserById } from "./findUserById";

describe("findUserById", () => {
  const users = [
    { id: 1, name: "Anna", isActive: true },
    { id: 2, name: "Alex", isActive: false },
    { id: 3, name: "Harry", isActive: true },
  ];

  it("Test #1", () => {
    expect(findUserById(users, 2)).toStrictEqual({
      id: 2,
      name: "Alex",
      isActive: false,
    });
  });

  it("Test #2", () => {
    expect(findUserById(users, 5)).toBeNull;
  });
});
