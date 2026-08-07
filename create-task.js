import fs from "node:fs";
import path from "node:path";

const taskPath = process.argv[2];

if (!taskPath) {
  console.error("Usage: npm run new <task-path> [--js | --ts]");
  process.exit(1);
}

const hasJsFlag = process.argv.includes("--js");
const hasTsFlag = process.argv.includes("--ts");

if (hasJsFlag && hasTsFlag) {
  console.error("Please specify only one extension: --js or --ts");
  process.exit(1);
}

const extension = hasTsFlag ? "ts" : "js";

const dir = path.join(process.cwd(), "src", taskPath);

fs.mkdirSync(dir, { recursive: true });

const files = {
  [`solution.${extension}`]: `// Solution\n`,
  "task.md": `# ${path.basename(taskPath)}

## Description

TODO

---

## Example

\`\`\`${extension}

\`\`\`

---

## Requirements

-

---

## Possible Solution

\`\`\`${extension}

\`\`\`

---

## Complexity

- Time:
- Space:
`,
};

for (const [name, content] of Object.entries(files)) {
  const filePath = path.join(dir, name);

  if (fs.existsSync(filePath)) {
    console.log(`⚠ ${filePath} already exists`);
    continue;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✓ Created ${filePath}`);
}
