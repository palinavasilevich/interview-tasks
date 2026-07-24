#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const taskPath = process.argv[2];

if (!taskPath) {
  console.error("Usage: npm run new -- arrays/remove-key");
  process.exit(1);
}

const dir = path.join(process.cwd(), "src", taskPath);

fs.mkdirSync(dir, { recursive: true });

const files = {
  "solution.js": `// Solution\n`,
  "task.md": `# ${path.basename(taskPath)}

## Description

TODO

---

## Example

\`\`\`javascript

\`\`\`

---

## Requirements

-

---

## Possible Solution

\`\`\`javascript

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
