import { describe, it, expect } from "vitest";
import { arrayToObject } from "./array-to-object.js";

describe("arrayToObject", () => {
  it("converts a basic array to an object", () => {
    expect(
      arrayToObject([
        { name: "width", value: 10 },
        { name: "height", value: 20 },
      ]),
    ).toEqual({ width: 10, height: 20 });
  });

  it("returns an empty object for an empty array", () => {
    expect(arrayToObject([])).toEqual({});
  });

  it("uses the last value when name is duplicated", () => {
    expect(
      arrayToObject([
        { name: "width", value: 10 },
        { name: "width", value: 30 },
      ]),
    ).toEqual({ width: 30 });
  });

  it("handles multiple duplicates, keeping the last one", () => {
    expect(
      arrayToObject([
        { name: "width", value: 10 },
        { name: "width", value: 20 },
        { name: "width", value: 30 },
      ]),
    ).toEqual({ width: 30 });
  });

  it("handles string values", () => {
    expect(
      arrayToObject([{ name: "color", value: "red" }]),
    ).toEqual({ color: "red" });
  });

  it("handles boolean values", () => {
    expect(
      arrayToObject([{ name: "visible", value: false }]),
    ).toEqual({ visible: false });
  });

  it("handles null values", () => {
    expect(
      arrayToObject([{ name: "alias", value: null }]),
    ).toEqual({ alias: null });
  });

  it("handles a single entry", () => {
    expect(
      arrayToObject([{ name: "x", value: 42 }]),
    ).toEqual({ x: 42 });
  });

  it("handles mixed types across different keys", () => {
    expect(
      arrayToObject([
        { name: "count", value: 5 },
        { name: "label", value: "hello" },
        { name: "active", value: true },
        { name: "ref", value: null },
      ]),
    ).toEqual({ count: 5, label: "hello", active: true, ref: null });
  });
});
