import fs from "node:fs";
import path from "node:path";

export function findTaskDirectory(taskPath) {
  let dir = path.resolve(process.cwd(), taskPath);

  if (!fs.existsSync(dir)) {
    dir = path.resolve(process.cwd(), "src", taskPath);
  }

  if (!fs.existsSync(dir)) {
    throw new Error(`Directory not found: ${taskPath}`);
  }

  return dir;
}

export function findTestFile(taskPath) {
  const dir = findTaskDirectory(taskPath);

  const testFiles = fs.readdirSync(dir).filter((file) => {
    return file.endsWith(".test.ts") || file.endsWith(".test.js");
  });

  if (testFiles.length === 0) {
    throw new Error(`No test file found in:\n${dir}`);
  }

  if (testFiles.length > 1) {
    throw new Error(`Multiple test files found:\n${testFiles.join("\n")}`);
  }

  return {
    dir,
    testFile: testFiles[0],
    testPath: path.join(dir, testFiles[0]),
  };
}
