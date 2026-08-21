export function get(obj: unknown, path: string) {
  const paths = path.split(".");
  let currentNode: unknown = obj;

  for (const p of paths) {
    if (
      currentNode === null ||
      typeof currentNode !== "object" ||
      !(p in currentNode)
    ) {
      return undefined;
    }

    currentNode = (currentNode as Record<string, unknown>)[p];
  }

  return currentNode;
}
