// Task 9 — Key Transformation
// Create a WithGetters type that creates a getter for each field and a WithSetters type that creates a setter for each field.

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

type WithGetters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type WithSetters<T> = {
  [P in keyof T as `set${Capitalize<string & P>}`]: (value: T[P]) => void;
};

// Validation:
type PersonGetters = WithGetters<Person>;
// Result: {
// getFirstName: () => string;
// getLastName: () => string;
// getAge: () => number;
// }

type PersonSetters = WithSetters<Person>;
// Result: {
// setFirstName: (value: string) => void;
// setLastName: (value: string) => void;
// setAge: (value: number) => void;
// }
