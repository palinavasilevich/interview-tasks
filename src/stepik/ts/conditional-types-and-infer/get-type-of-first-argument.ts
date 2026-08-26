// Task 3: Extracting the type of a function's first argument

type FirstArgument<T> = T extends (arg: infer A, ...args: any[]) => any
  ? A
  : never;

function logMessage(message: string, level?: number) {
  console.log(`[${level}] ${message}`);
}

type ArgType = FirstArgument<typeof logMessage>; // string
