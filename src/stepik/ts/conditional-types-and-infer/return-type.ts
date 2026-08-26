// Task 2: Retrieving a function's return type
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { name: "John", age: 30 };
}

function getString() {
  return "hello";
}

type UserType = MyReturnType<typeof getUser>; // { name: string; age: number }
type StringType = MyReturnType<typeof getString>; // string
