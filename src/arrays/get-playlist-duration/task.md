# Get Playlist Duration

## Problem

Given a playlist as an array of `[title, duration]` pairs, return the total duration as a formatted time string.

Each duration is a string in either `"MM:SS"` or `"HH:MM:SS"` format. The result should use the same format: omit the hours segment if the total is under one hour, otherwise include it.

## Examples

```ts
playlistDuration([
  ["Innuendo", "6:31"],
  ["I'm Going Slightly Mad", "4:22"],
  ["Headlong", "4:38"],
]); // "15:31"

playlistDuration([
  ["USS Callister", "01:16:00"],
  ["Arkangel", "52:00"],
  ["Crocodile", "59:00"],
  ["Hang the DJ", "51:00"],
  ["Metalhead", "41:00"],
  ["Black Museum", "01:09:00"],
]); // "05:48:00"

playlistDuration([["Short clip", "0:45"]]); // "00:45"

playlistDuration([]); // "00:00"
```

## Constraints

- Input durations are either `"MM:SS"` or `"HH:MM:SS"`
- All time components in the output are zero-padded to 2 digits
- Hours segment is included only when total duration is ≥ 1 hour
- Empty playlist returns `"00:00"`

## Notes

- Convert each duration to total seconds, sum them, then format the result
- Use `Math.floor(total / 3600)` for hours, `Math.floor((total % 3600) / 60)` for minutes, `total % 60` for seconds
- Always emit the minutes segment — skipping it when total < 60s produces `":SS"` instead of `"00:SS"`
