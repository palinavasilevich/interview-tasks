// !Task 7: Conditional type with multiple infers

type ExtractFunctionInfo<T> = T extends (...args: infer Args) => infer Return
  ? { args: Args; return: Return }
  : never;

function test(a: string, b: number): boolean {
  return true;
}

type TestInfo = ExtractFunctionInfo<typeof test>;
// { args: [a: string, b: number]; return: boolean }
