import { spawn } from "node:child_process";
import { findTestFile } from "./utils.js";

const taskPath = process.argv[2];

if (!taskPath) {
  console.error("Usage: npm run task <task-path>");
  process.exit(1);
}

try {
  const { testFile, testPath } = findTestFile(taskPath);

  console.log(`🧪 Running ${testFile}\n`);

  const child = spawn("npx", ["vitest", "run", testPath], {
    stdio: "inherit",
    shell: true,
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
} catch (error) {
  console.error(`❌ ${error.message}`);
  process.exit(1);
}
