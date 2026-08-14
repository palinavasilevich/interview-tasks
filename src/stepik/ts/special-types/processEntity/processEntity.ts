/*
 * Task 9 — Unknown and Custom Checks
 *
 * Add a type guard to check that unknown is an object with id and name fields.
 * */

interface Entity {
  id: number;
  name: string;
}

function isEntity(value: unknown): value is Entity {
  if (value === null || typeof value !== "object") return false;

  const obj = value as Record<string, unknown>;
  return typeof obj.id === "number" && typeof obj.name === "string";
}

export function processEntity(value: unknown): string {
  if (isEntity(value)) {
    return `Processing entity: ${value.name} (ID: ${value.id})`;
  }
  return "Invalid entity";
}
