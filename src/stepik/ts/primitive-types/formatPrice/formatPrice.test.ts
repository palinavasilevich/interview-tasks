import { describe, expect, it } from "vitest";

import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("Test #1", () => {
    expect(formatPrice(99.99, "USD")).toBe("$99.99");
  });

  it("Test #2", () => {
    expect(formatPrice(50, "EUR")).toBe("€50");
  });

  it("Test #3", () => {
    expect(formatPrice(1000, "RUB")).toBe("1000 ₽");
  });

  it("Test #4", () => {
    expect(formatPrice(75, "GBP")).toBe("75 GBP");
  });
});
