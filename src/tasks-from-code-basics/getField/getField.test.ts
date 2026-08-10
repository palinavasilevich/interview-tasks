import { test, expect } from "vitest";

import { getField } from "./getField";

test("function getField", () => {
  expect(getField(1)).toEqual([[null]]);
  expect(getField(2)).toEqual([
    [null, null],
    [null, null],
  ]);
  expect(getField(3)).toEqual([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
});
