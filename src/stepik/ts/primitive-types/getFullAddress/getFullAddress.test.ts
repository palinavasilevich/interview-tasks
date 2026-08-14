import { describe, expect, it } from "vitest";

import { getFullAddress, type UserWithAddress } from "./getFullAddress";

describe("getFullAddress", () => {
  const user: UserWithAddress = {
    name: "Sherlock Holmes",
    address: {
      city: "London",
      street: "Baker",
      house: 221,
    },
  };

  it("Test #1", () => {
    expect(getFullAddress(user)).toBe(
      `City: London, Street: Baker, House: 221`,
    );
  });
});
