# Sort Tickets

## Problem

You're given an array of one-way flight tickets in random order. Each ticket is an object `{ from, to }` representing a leg of a single continuous trip. Reconstruct the trip and return the tickets sorted so that each ticket's `to` city matches the next ticket's `from` city.

Exactly one city in the input is never anyone's destination — that's where the trip starts.

## Examples

```js
const tickets = [
  { from: "Moscow", to: "SPb" },
  { from: "NY", to: "London" },
  { from: "London", to: "Moscow" },
];

sortTickets(tickets);
// [
//   { from: "NY", to: "London" },
//   { from: "London", to: "Moscow" },
//   { from: "Moscow", to: "SPb" },
// ]
```

## Constraints

- The tickets always form a single, valid, linear itinerary (no branches, no cycles) — there is exactly one starting city and one ending city.
- Every city appears as a `from` at most once and as a `to` at most once.
- Input array is not mutated.

## Notes

- Index the tickets by both `from` and `to` city (two maps) so each lookup is O(1).
- The starting ticket is the one whose `from` city never appears as a `to` in any other ticket.
- Walk the chain from the start, following `to → from` links via the `from`-indexed map, until every ticket has been placed.
