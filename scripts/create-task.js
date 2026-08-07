#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const taskPath = process.argv[2];

if (!taskPath) {
  console.error("Usage: npm run new <task-path> [--ts] [--test]");
  process.exit(1);
}

const args = new Set(process.argv.slice(3));

const extension = args.has("--ts") ? "ts" : "js";
const createTest = args.has("--test");

const dir = path.join(process.cwd(), "src", taskPath);
const taskName = path.basename(taskPath);

fs.mkdirSync(dir, { recursive: true });

const solutionTemplate =
  extension === "ts"
    ? `export function solution() {
  throw new Error("Not implemented");
}
`
    : `export function solution() {
  throw new Error("Not implemented");
}
`;

const taskTemplate = `# ${taskName}

## Difficulty

-

## Tags

-

## Description

TODO

---

## Example

\`\`\`${extension}

\`\`\`

---

## Constraints

-

---

## Notes

-

---

## Complexity

- Time:
- Space:
`;

const files = {
  [`solution.${extension}`]: solutionTemplate,
  "task.md": taskTemplate,
};

if (createTest) {
  files[`solution.test.${extension}`] =
    `import { describe, expect, it } from "vitest";

import { solution } from "./solution";

describe("${taskName}", () => {
  it("example #1", () => {
    expect(solution()).toEqual();
  });

  it("example #2", () => {
    expect(solution()).toEqual();
  });

  it("edge case", () => {
    expect(solution()).toEqual();
  });
});
`;
}

for (const [name, content] of Object.entries(files)) {
  const filePath = path.join(dir, name);

  if (fs.existsSync(filePath)) {
    console.log(`⚠ ${filePath} already exists`);
    continue;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✓ Created ${filePath}`);
}
