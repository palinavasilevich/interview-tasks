export function getObjectByPath(obj, path) {
  const paths = path.split(".");
  let result = obj;

  for (const p of paths) {
    if (result == null || !(p in result)) return undefined;
    result = result[p];
  }

  return result;
}
