# Like or Dislike

## Problem

Simulate how YouTube's Like/Dislike buttons work.

Rules:
- Initially neither button is selected — state is `"Nothing"`
- Pressing a button that is **not** currently active makes it active (the other one deactivates)
- Pressing the **currently active** button deactivates it — state returns to `"Nothing"`
- Only one button can be active at a time

Given an array of button presses (`"Like"` or `"Dislike"`), return the final state: `"Like"`, `"Dislike"`, or `"Nothing"`.

## Examples

```js
likeOrDislike(["Like"]);                        // "Like"
likeOrDislike(["Dislike"]);                     // "Dislike"
likeOrDislike(["Like", "Like"]);                // "Nothing"
likeOrDislike(["Dislike", "Like"]);             // "Like"
likeOrDislike(["Like", "Dislike", "Dislike"]); // "Nothing"
likeOrDislike(["Like", "Like", "Like"]);        // "Like"
likeOrDislike([]);                              // "Nothing"
```

## Constraints

- Input contains only `"Like"` and `"Dislike"` strings
- Empty array returns `"Nothing"`

## Notes

- Model this as a state machine: start at `"Nothing"`, and for each press either toggle off (same button) or switch to the new button
- `reduce` with initial value `"Nothing"` maps directly to this state machine — one line, no edge cases
- Scanning for consecutive duplicates is the wrong approach — it fails when the same button is pressed 3+ times (e.g. `["Like", "Like", "Like"]` → `"Like"`, not `"Nothing"`)
