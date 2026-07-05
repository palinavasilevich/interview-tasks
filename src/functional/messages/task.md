# Messages In Order

## Problem

Implement a function `solution(render)` that returns a message handler. Messages arrive with sequential integer IDs starting from 1, but may arrive **out of order**. The handler must call `render` on each message in strict ID order, buffering early arrivals until their turn comes.

## Examples

```js
const send = solution(console.log);

send({ id: 3, text: "three" });
send({ id: 5, text: "five" });
send({ id: 1, text: "one" });   // renders 1, then flushes nothing (2 missing)
send({ id: 2, text: "two" });   // renders 2, then flushes 3 (4 missing)
send({ id: 4, text: "four" });  // renders 4, then flushes 5
send({ id: 6, text: "six" });   // renders 6

// Output in order: 1, 2, 3, 4, 5, 6
```

## Constraints

- IDs are sequential integers starting from 1
- Messages may arrive in any order
- Each message ID arrives exactly once

## Notes

- Use a `Map<id, message>` to buffer out-of-order messages
- After rendering the expected message, flush consecutive buffered IDs in a loop — break on the first gap
- Common bug: using the outer `message.id` inside the flush loop instead of the loop variable `id` — causes buffered entries to never be deleted (memory leak)
