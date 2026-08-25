// Task 8 — Filtering by Value Type
// Create the types:
// - StringFields — keeps only fields with string values
// - NumberFields — keeps only fields with numeric values
// - BooleanFields — keeps only fields with boolean values

interface Entity {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  isActive: boolean;
}

type StringFields<T> = {
  [P in keyof T as T[P] extends string ? P : never]: T[P];
};

type NumberFields<T> = {
  [P in keyof T as T[P] extends number ? P : never]: T[P];
};

type BooleanFields<T> = {
  [P in keyof T as T[P] extends boolean ? P : never]: T[P];
};

// Validation:
type Strings = StringFields<Entity>; // { name: string; description: string; }
type Numbers = NumberFields<Entity>; // { id: number; price: number; }
type Booleans = BooleanFields<Entity>; // { inStock: boolean; isActive: boolean; }
