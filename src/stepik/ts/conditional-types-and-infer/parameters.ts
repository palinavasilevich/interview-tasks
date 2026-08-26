// Task 4: Retrieving all function arguments

type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

function createUser(name: string, age: number, email: string) {
  return { name, age, email };
}

type UserParams = MyParameters<typeof createUser>;
// [name: string, age: number, email: string]
