// Task 15 — Converting to Strings
// Create a ToString type that converts all object fields to strings.

interface Data {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: Date;
  tags: string[];
}

type ToString<T> = {
  [P in keyof T]: string;
};

// Validation:
type StringData = ToString<Data>;
// Result: {
// id: string;
// name: string;
// isActive: string;
// createdAt: string;
// tags: string;
// }
