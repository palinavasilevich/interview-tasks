import { describe, expect, it, vi } from "vitest";
import { forEach } from "./forEach";

describe("forEach", () => {
  it("calls callback for each element", () => {
    const callback = vi.fn();

    forEach([1, 2, 3], callback);

    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("passes the element and its index", () => {
    const callback = vi.fn();

    forEach(["a", "b", "c"], callback);

    expect(callback).toHaveBeenNthCalledWith(1, "a", 0);
    expect(callback).toHaveBeenNthCalledWith(2, "b", 1);
    expect(callback).toHaveBeenNthCalledWith(3, "c", 2);
  });

  it("does not call callback for an empty array", () => {
    const callback = vi.fn();

    forEach([], callback);

    expect(callback).not.toHaveBeenCalled();
  });

  it("ignores the return value of callback", () => {
    const callback = vi.fn((item: string) => item.toUpperCase());

    const result = forEach(["a", "b"], callback);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(result).toBeUndefined();
  });
});
