// Task 3 — Readonly

interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

type MyNullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableProduct = MyNullable<Product>;
