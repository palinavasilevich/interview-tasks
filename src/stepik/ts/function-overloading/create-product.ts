// Task 4 — Overloading with Optional Parameters (Refactoring)
type Product = {
  id: number;
  name: string;
  price?: number;
  inStock?: boolean;
};

// Bad: Redundant overloading
// function createProduct(name: string): Product;
// function createProduct(name: string, price: number): Product;
// function createProduct(name: string, price: number, inStock: boolean): Product;

// function createProduct(
//   name: string,
//   price?: number,
//   inStock?: boolean,
// ): Product {
//   return {
//     id: Date.now(),
//     name,
//     price: price || 0,
//     inStock: inStock ?? true,
//   };
// }

// Rewrite in a simpler way, without overloading
// Your code here
function createProduct(
  name: string,
  price?: number,
  inStock?: boolean,
): Product {
  return {
    id: Date.now(),
    name,
    price: price ?? 0,
    inStock: inStock ?? true,
  };
}
