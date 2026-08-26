/* Task 10 — LocalStorage
Create a storage function that:
- accepts a key and returns a value (null if none)
- accepts a key and a value — stores the value
- accepts a key, a value, and a lifetime in seconds — stores with a lifetime */

// Your signatures and implementation here
function storage(key: string): unknown | null;
function storage(key: string, value: unknown): void;
function storage(key: string, value: unknown, lifetime: number): void;

function storage(
  key: string,
  value?: unknown,
  lifetime?: number,
): unknown | null | void {
  if (value === undefined) {
    return localStorage.getItem(key);
  }

  localStorage.setItem(key, JSON.stringify(value));

  if (lifetime !== undefined) {
    setTimeout(() => {
      localStorage.removeItem(key);
    }, lifetime * 1000);
  }
}

// Test:
storage("token", "abc123"); // stores
console.log(storage("token")); // "abc123"
storage("session", { user: "John" }, 3600); // stores for an hour
