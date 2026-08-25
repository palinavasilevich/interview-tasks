// Task 10 — Field Flags
// Create a Flags type that creates a Boolean flag for each field.
// For example, for the name field, it creates hasName: boolean.

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
}

type Flags<T> = {
  [P in keyof T as `has${Capitalize<string & P>}`]-?: boolean;
};

// Validation:
type ProductFlags = Flags<Product>;
// Result: {
// hasId: boolean;
// hasTitle: boolean;
// hasPrice: boolean;
// hasDescription: boolean;
// }
