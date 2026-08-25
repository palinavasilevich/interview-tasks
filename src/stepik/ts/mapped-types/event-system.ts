// Task 11 — Event System (Simplified)
// Create an EventHandlers type that generates the correct handler types based on the event map.

type AppEvents = {
  login: { userId: number };
  logout: void;
  error: { message: string; code: number };
  ready: void;
};

type EventHandlers<T> = {
  [K in keyof T]: T[K] extends void ? () => void : (payload: T[K]) => void;
};

// Validation:
type Handlers = EventHandlers<AppEvents>;
// Result:
// {
// login: (payload: { userId: number }) => void;
// logout: () => void;
// error: (payload: { message: string; code: number }) => void;
// ready: () => void;
// }
