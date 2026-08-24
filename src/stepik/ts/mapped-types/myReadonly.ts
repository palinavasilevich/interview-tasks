// Task 2 — Readonly

interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Validation:
type ReadonlyProduct = MyReadonly<Product>;
