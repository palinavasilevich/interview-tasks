import { describe, it, expect } from "vitest";
import { getNodes } from "./get-nodes-by-type.js";

describe("getNodes", () => {
  it("returns nodes matching type at multiple depths (example 1)", () => {
    const tree = {
      type: "nested",
      children: [
        { type: "nested", children: [{ type: "added", value: 50 }] },
        { type: "added", value: 51 },
      ],
    };
    expect(getNodes(tree, "added")).toEqual([
      { type: "added", value: 50 },
      { type: "added", value: 51 },
    ]);
  });

  it("returns node deeply nested three levels down (example 2)", () => {
    const tree = {
      type: "nested",
      children: [
        {
          type: "nested",
          children: [
            { type: "nested", children: [{ type: "added", value: 60 }] },
          ],
        },
      ],
    };
    expect(getNodes(tree, "added")).toEqual([{ type: "added", value: 60 }]);
  });

  it("returns nodes in order across siblings (example 3)", () => {
    const tree = {
      type: "nested",
      children: [
        { type: "added", value: 42 },
        { type: "nested", children: [{ type: "added", value: 43 }] },
        { type: "added", value: 44 },
      ],
    };
    expect(getNodes(tree, "added")).toEqual([
      { type: "added", value: 42 },
      { type: "added", value: 43 },
      { type: "added", value: 44 },
    ]);
  });

  it("returns empty array when no nodes match the type", () => {
    const tree = {
      type: "nested",
      children: [{ type: "nested", children: [] }],
    };
    expect(getNodes(tree, "added")).toEqual([]);
  });

  it("returns the root node itself when it matches the type", () => {
    const tree = { type: "added", value: 1 };
    expect(getNodes(tree, "added")).toEqual([{ type: "added", value: 1 }]);
  });

  it("returns empty array for a leaf node that does not match", () => {
    const tree = { type: "added", value: 1 };
    expect(getNodes(tree, "removed")).toEqual([]);
  });

  it("handles a tree with no children property on leaf nodes", () => {
    const tree = {
      type: "nested",
      children: [
        { type: "added", value: 10 },
        { type: "added", value: 20 },
      ],
    };
    expect(getNodes(tree, "added")).toEqual([
      { type: "added", value: 10 },
      { type: "added", value: 20 },
    ]);
  });
});
