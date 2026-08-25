// Task 13 — Deep Mapped Type
// Create a DeepReadonly type that makes all object fields readonly,
// including nested objects (recursively).

interface NestedObject {
  id: number;
  name: string;
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      push: boolean;
    };
  };
  tags: string[];
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Validation:
type ReadonlyNested = DeepReadonly<NestedObject>;
// Result: all fields are readonly, including nested ones
