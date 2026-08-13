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

function toCamelCase(value) {
  return value
    .trim()
    .split(/[\s-_]+/)
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toLowerCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

const functionName = toCamelCase(taskName);

fs.mkdirSync(dir, { recursive: true });

const solutionTemplate = `export function ${functionName}() {
  throw new Error("Not implemented");
}
`;

const testTemplate = `import { describe, expect, it } from "vitest";

import { ${functionName} } from "./${functionName}";

describe("${taskName}", () => {
  it("Test #1", () => {
    expect(${functionName}()).toBe();
  });

  it("Test #2", () => {
    expect(${functionName}()).toBe();
  });
});
`;

const taskTemplate = `# ${taskName}

## Difficulty

<!-- Easy | Medium | Hard -->

## Tags

<!-- Example: Array, Hash Table, Two Pointers -->

## Description

<!-- Write the task description here. -->

---

## Example

\`\`\`${extension}
// Add one or more examples from the problem statement.
\`\`\`

---

## Constraints

<!-- List the problem constraints here. -->

---

## Solution Idea

<!-- Describe your approach before writing code. -->

---

## Notes

<!-- Add observations, ideas, edge cases, or interview notes. -->

---

## Complexity

- Time:
- Space:
`;

const files = {
  [`${functionName}.${extension}`]: solutionTemplate,
  "task.md": taskTemplate,
};

if (createTest) {
  files[`${functionName}.test.${extension}`] = testTemplate;
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
