// Task 6 — Template Keys
// Create an EventHandlers type that generates event handlers. It receives a union of event names as input and an object with keys like "onClick", "onChange", and so on as output.

type EventNames = "click" | "change" | "focus" | "blur";

type EventHandlers<T extends string> = {
  [P in `on${Capitalize<T>}`]: () => void;
};

// Validation:
type Handlers = EventHandlers<EventNames>;
// Should look like this: {
// onClick: () => void;
// onChange: () => void;
// onFocus: () => void;
// onBlur: () => void;
// }
