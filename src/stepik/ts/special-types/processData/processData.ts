/*
 * Task 10 - All Special Types Together
 *
 * Create a function that demonstrates the use of all special types.
 */

export function processData(
  data: unknown,
  onError: (msg: string) => never,
  logger: (msg: string) => void,
): never | void {
  if (typeof data === "string") {
    logger(`Received a string: ${data}`);
  } else if (typeof data === "number") {
    logger(`Received a number: ${data}`);
  } else if (data === null) {
    onError("Received null, but expected data");
  } else {
    logger(
      `Received an object with keys: ${Object.keys(data || {}).join(", ")}`,
    );
  }
}
