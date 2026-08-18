import { describe, expect, it } from "vitest";

import { createStack } from "./createStack";

describe("createStack", () => {
  const numberStack = createStack<number>();
  numberStack.push(1);
  numberStack.push(2);
  numberStack.push(3);

  const stringStack = createStack<string>();
  stringStack.push("a");
  stringStack.push("b");
  stringStack.push("c");
  it("numberStack #1", () => {
    expect(numberStack.pop()).toBe(3);
  });

  it("numberStack #2", () => {
    expect(numberStack.peek()).toBe(2);
  });

  it("stringStack #1 ", () => {
    expect(stringStack.pop()).toBe("c");
  });

  it("stringStack #2 ", () => {
    expect(stringStack.peek()).toBe("b");
  });
});
