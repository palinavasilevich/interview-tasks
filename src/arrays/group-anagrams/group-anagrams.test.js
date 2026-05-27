import { describe, it, expect } from "vitest";
import { groupAnagrams } from "./group-anagrams.js";

describe("groupAnagrams", () => {
  it("groups basic anagrams together", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result).toHaveLength(3);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(["eat", "tea", "ate"]),
        expect.arrayContaining(["tan", "nat"]),
        ["bat"],
      ])
    );
  });

  it("returns a single group when all words are anagrams", () => {
    const result = groupAnagrams(["abc", "bca", "cab"]);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(expect.arrayContaining(["abc", "bca", "cab"]));
  });

  it("returns each word in its own group when no anagrams exist", () => {
    const result = groupAnagrams(["abc", "def", "ghi"]);
    expect(result).toHaveLength(3);
  });

  it("handles a single word", () => {
    expect(groupAnagrams(["hello"])).toEqual([["hello"]]);
  });

  it("handles an empty array", () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it("handles words with repeated characters", () => {
    const result = groupAnagrams(["aab", "aba", "baa", "xyz"]);
    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(["aab", "aba", "baa"]),
        ["xyz"],
      ])
    );
  });
});
