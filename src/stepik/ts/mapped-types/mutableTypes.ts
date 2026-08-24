// Task 4 — Combining Modifiers

type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
  readonly email?: string;
};

type OptionalUser = {
  id?: number;
  name?: string;
  email?: string;
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Validation:
type User1 = Mutable<ReadonlyUser>;
type User2 = MyRequired<OptionalUser>;
