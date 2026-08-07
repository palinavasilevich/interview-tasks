import { describe, expect, it } from "vitest";

import { lessonsCount } from "./solution";

describe("lessonsCount", () => {
  it("example #1", () => {
    expect(lessonsCount({ lessons: [] })).toBe(0);
  });

  it("example #2", () => {
    const course = { lessons: ["intro"] };
    expect(lessonsCount(course)).toBe(1);
  });
});
