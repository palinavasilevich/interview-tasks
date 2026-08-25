// Task 14 — Nullable with Exceptions
// Create a NullableExcept type that makes fields null but excludes
// the specified keys (they remain unchanged).

interface Config {
  apiUrl: string;
  timeout: number;
  retries: number;
  cacheKey: string;
  debug: boolean;
}

type NullableExcept<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? T[P] : T[P] | null;
};

// Validation:
type ConfigWithNull = NullableExcept<Config, "apiUrl" | "cacheKey">;
// Result: {
// apiUrl: string; // unchanged
// timeout: number | null;
// retries: number | null;
// cacheKey: string; // unchanged
// debug: boolean | null;
// }
