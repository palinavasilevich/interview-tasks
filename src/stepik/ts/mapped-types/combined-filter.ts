// Task 12 — Combined Filter
// Create a PublicFields type that only displays string fields,
// excluding the "password" field (if present).

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  age: number;
  isActive: boolean;
}

type PublicFields<T> = {
  [P in keyof T as T[P] extends string
    ? P extends "password"
      ? never
      : P
    : never]: T[P];
};

// Validation:
type PublicUser = PublicFields<User>;
// Result: { username: string; email: string; }
