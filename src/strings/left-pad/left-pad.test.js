import { describe, it, expect } from "vitest";
import { leftPad } from "./left-pad.js";

describe("leftPad", () => {
  it("pads a short string to the target length", () => {
    expect(leftPad(10, "hello")).toBe("     hello");
  });

  it("returns the string unchanged when it already equals symbolCount", () => {
    expect(leftPad(5, "hello")).toBe("hello");
  });

  it("returns the string unchanged when it exceeds symbolCount", () => {
    expect(leftPad(3, "hello")).toBe("hello");
  });

  it("pads an empty string with spaces", () => {
    expect(leftPad(4, "")).toBe("    ");
  });

  it("returns empty string when both symbolCount and str are empty", () => {
    expect(leftPad(0, "")).toBe("");
  });

  it("returns the string unchanged when symbolCount is 0", () => {
    expect(leftPad(0, "abc")).toBe("abc");
  });
});
