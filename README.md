# Interview Tasks

A collection of coding interview problems solved in JavaScript, organized by topic. Each task includes a solution and a test suite.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Testing:** [Vitest](https://vitest.dev/)

## Getting Started

```bash
npm install
```

### Run all tests

```bash
npm test
```

### Run tests once (CI mode)

```bash
npm run test:run
```

### Run tests with UI

```bash
npm run test:ui
```

## Project Structure

```
src/
├── arrays/
│   ├── array-to-object/
│   ├── top-k-frequent-elements/
│   └── two-sum/
├── strings/
│   └── left-pad/
├── dynamic-programming/
├── graphs/
├── sorting/
└── trees/
```

Each task folder contains:
- `task.md` — problem description
- `solution.js` — implementation
- `solution.test.js` — tests

## Tasks

### Arrays

| Task | Description |
|------|-------------|
| [Two Sum](src/arrays/two-sum/) | Find indices of two numbers that add up to a target |
| [Top K Frequent Elements](src/arrays/top-k-frequent-elements/) | Return the k most frequent elements in an array |
| [Array to Object](src/arrays/array-to-object/) | Convert an array into an object |

### Strings

| Task | Description |
|------|-------------|
| [Left Pad](src/strings/left-pad/) | Pad a string from the left to a given length |
