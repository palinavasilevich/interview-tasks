/*
Task 4 — Object Arrays
Create a function that finds a user by ID
*/

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

export function findUserById(users: User[], id: number): User | null {
  const user = users.find((user) => user.id === id);

  return user ?? null;
}
