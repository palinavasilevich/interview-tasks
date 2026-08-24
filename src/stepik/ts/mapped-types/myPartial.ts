// Task 1 — Basic Mapped Type
// Create a MyPartial type that makes all object fields optional.

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Validation:
type PartialUser = MyPartial<User>;

const user1: PartialUser = {};
const user2: PartialUser = { name: "John" };
