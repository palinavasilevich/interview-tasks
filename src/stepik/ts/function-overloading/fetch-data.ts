// Task 9 - Refactoring: removing unnecessary overload

// Bad: find and fix problems
// function fetchData(url: string): Promise<any>;
// function fetchData(url: string, options: RequestInit): Promise<any>;
// function fetchData(url: string, options?: RequestInit): Promise<any> {
//   return fetch(url, options).then((r) => r.json());
// }

// function processValue(x: number): number;
// function processValue(x: string): string;
// function processValue(x: boolean): boolean;
// function processValue(x: number | string | boolean): number | string | boolean {
//   if (typeof x === "number") return x * 2;
//   if (typeof x === "string") return x.toUpperCase();
//   return !x;
// }

// Rewrite it in an optimal way
// Your code here
async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

function processValue(x: number | string | boolean): number | string | boolean {
  if (typeof x === "number") {
    return x * 2;
  }

  if (typeof x === "string") {
    return x.toUpperCase();
  }

  return !x;
}

// Test:
type User = {
  id: number;
  name: string;
};

const user = fetchData<User>("/api/user");
