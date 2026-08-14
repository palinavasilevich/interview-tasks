/*
 * Task 8 — never and errors
 *
 * Create the validation function that throws an error with details.
 */
interface ValidationError {
  field: string;
  message: string;
}

// interface User {
//   name: string;
//   age: number;
// }

function throwValidationError(field: string, message: string): never {
  const error: ValidationError = { field, message };
  throw new Error(JSON.stringify(error));
}

export function validateUser(user: any): boolean | never {
  if (!user.name) {
    throwValidationError("name", "Name is required!");
  }

  if (user.age < 18) {
    throwValidationError("age", "Age must be at least 18 years old!");
  }

  return true;
}
