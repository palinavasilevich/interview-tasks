#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const taskPath = process.argv[2];

if (!taskPath) {
  console.error("Usage: node create-task.js <category/task-name>");
  process.exit(1);
}

const root = process.cwd();
const dir = path.join(root, taskPath);

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

- **Time:** O(...)
- **Space:** O(...)
`,
};

for (const [name, content] of Object.entries(files)) {
  const file = path.join(dir, name);

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content);
    console.log(`✓ Created ${file}`);
  } else {
    console.log(`⚠ ${file} already exists`);
  }
}
