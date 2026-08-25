// Task 7 — Excluding Fields by Name
// Create a WithoutPassword type that excludes the password field and a generic ExcludeFields type that excludes the specified fields.

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

type WithoutPassword<T> = {
  [P in keyof T as P extends "password" ? never : P]: T[P];
};

type ExcludeFields<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// Validation:
type PublicUser = WithoutPassword<User>;
// Result: { id: number; name: string; email: string; role: "admin" | "user"; }

type NoIdNoRole = ExcludeFields<User, "id" | "role">;
//  Result: { name: string; email: string; password: string; }
