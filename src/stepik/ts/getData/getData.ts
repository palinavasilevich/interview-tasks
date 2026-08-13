/*
Task 7 - Functions with Different Return Types
Create a function that returns different types depending on the flag.
*/

export type User = {
  id: number;
  name: string;
  age: number;
};

export function getData(user: User, isString: boolean): string | User {
  return isString
    ? `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`
    : user;
}
