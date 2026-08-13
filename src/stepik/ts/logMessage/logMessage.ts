/*
Task 10 — Functions with Optional Parameters
Create a function that logs a message with an optional level.
*/

export function logMessage(message: string, level?: string): void {
  const timestamp = new Date().toISOString();

  if (level) {
    console.log(`[${timestamp}] [${level}] ${message}`);
  } else {
    console.log(`[${timestamp}] ${message}`);
  }
}

logMessage("Server started");
logMessage("Connection error", "ERROR");
logMessage("Warning", "WARN");
