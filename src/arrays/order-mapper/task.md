# Order Mapper

## Problem

Given an array of `users` and an array of `orders`, attach the corresponding user object to each order and return the enriched orders array.

Each order has a `userId` field that matches the `id` field of a user.

## Examples

```js
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob",   email: "bob@example.com" },
];

const orders = [
  { userId: 1, product: "Laptop", price: 1000 },
  { userId: 2, product: "E-Book", price: 300 },
  { userId: 1, product: "Phone",  price: 500 },
];

orderMapper(users, orders);
// [
//   { userId: 1, product: "Laptop", price: 1000, user: { id: 1, name: "Alice", ... } },
//   { userId: 2, product: "E-Book", price: 300,  user: { id: 2, name: "Bob",   ... } },
//   { userId: 1, product: "Phone",  price: 500,  user: { id: 1, name: "Alice", ... } },
// ]
```

## Constraints

- Each `order.userId` is guaranteed to match an existing `user.id`
- `1 <= users.length <= 10^4`
- `1 <= orders.length <= 10^4`

## Notes

- Naive approach with `find()` inside `map()` is O(n × m) — aim for O(n + m) using a Map for O(1) lookups
