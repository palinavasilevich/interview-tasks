interface User {
  firstName: string;
  lastName?: string;
  age?: number;
}

export function createGreeting(user: User): string {
  let greeting = `Hello, ${user.firstName}`;

  if (user.lastName) {
    greeting += ` ${user.lastName}`;
  }

  if (user.age) {
    greeting += ` (${user.age} лет)`;
  }

  return greeting + "!";
}
