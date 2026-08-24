// Task 5 — Type from Literals
// Create a Config type based on the given keys; all fields must be of type string | number

type ConfigKeys = "theme" | "fontSize" | "language" | "timeout";

type Config = {
  [P in ConfigKeys]: string | number;
};

// Validation:
const appConfig: Config = {
  theme: "dark",
  fontSize: 14,
  language: "ru",
  timeout: 5000,
}; // should work

// const invalidConfig: Config = { theme: "dark" }; // Error, missing fields
