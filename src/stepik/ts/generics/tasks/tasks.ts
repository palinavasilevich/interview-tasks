/*
 * Task 1 — Generic API Response
 *
 * You need to type the function that returns the response from the server.
 * The response always contains the status and data fields, and the data can be of different types.
 */

interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
  message?: string;
}

// Validation:
const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "Ivan" },
};

const stringResponse: ApiResponse<string> = {
  status: "success",
  data: "OK",
};

/*
 * Task 2 — The First Element of an Array
 *
 * Write a function that returns the first element of an array.
 * The function must work with any array type.
 */

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// Validation:
const num = firstElement([1, 2, 3]); // number | undefined
const str = firstElement(["a", "b", "c"]); // string | undefined
const empty = firstElement([]); // undefined

/*
 * Task 3 — Wrapper
 *
 * Create a Wrapper interface that can wrap a value of any type.
 */

interface Wrapper<T> {
  value: T;
  timestamp: Date;
  id: string;
}

// Validation:
const stringWrapper: Wrapper<string> = {
  value: "hello",
  timestamp: new Date(),
  id: "1",
};

const numberWrapper: Wrapper<number> = {
  value: 42,
  timestamp: new Date(),
  id: "2",
};

/*
 * Task 4 — Merging Two Arrays
 *
 * Write a function that merges two arrays. The array elements can have different types.
 */

function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

// Validation:
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
const merged = mergeArrays(numbers, strings); // (number | string)[]
console.log(merged); // [1, 2, 3, "a", "b", "c"]

/*
 * Task 5 — Function with Length Constraint
 *
 * Write a function that takes a value with a length property and returns that value.
 */

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log(`Length: ${item.length}`);
  return item;
}

// Validation:
logLength("string"); // OK
logLength([1, 2, 3]); // OK
// logLength(42); // Error! number does not have length

/*
 * Task 6 — Getting a Value by Key
 *
 * Write a function that takes an object and a key and returns the value for that key.
 */

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Validation:
const user = {
  name: "Ivan",
  age: 30,
  isActive: true,
};

const age = getValue(user, "age"); // number
const active = getValue(user, "isActive"); // boolean
// getValue(user, "email"); // Error: email is not in the object

/*
 * Task 7 — Operation Result
 *
 * Create a Result type that can contain a success result of any type or an error.
 */

type Result<T> = { success: true; data: T } | { success: false; error: string };

// Validation:
const success: Result<number> = {
  success: true,
  data: 42,
};

const success2: Result<string> = {
  success: true,
  data: "success",
};

const failure: Result<any> = {
  success: false,
  error: "Something went wrong",
};

/*
 * Task 10 — Key-Value Pair
 *
 * Create a Pair interface that can store key-value pairs of any type.
 */

interface Pair<K, V> {
  key: K;
  value: V;
}

// Check:
const firstPair: Pair<number, string> = {
  key: 1,
  value: "one",
};

const secondPair: Pair<string, boolean> = {
  key: "active",
  value: true,
};

const thirdPair: Pair<string, number> = {
  key: "age",
  value: 30,
};

/*
 * Task 12 — Type with a Default Value
 *
 * Create a Storage type that stores strings by default, but can be overridden for other types.
 */

type TStorage<T = string> = {
  key: string;
  value: T;
  expiresAt?: Date;
};

// Validation:
const stringStorage: TStorage = {
  key: "token",
  value: "abc123", // default string type
};

const numberStorage: TStorage<number> = {
  key: "count",
  value: 42,
};

const userStorage: TStorage<{ id: number; name: string }> = {
  key: "currentUser",
  value: { id: 1, name: "Ivan" },
};

/*
 * Task 14 — Recursive Type (Tree)
 *
 * Create a TreeNode type that can contain a value of any type and an array of child
 * nodes of the same type.
 */
interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[];
}

// Check:
const tree: TreeNode<number> = {
  value: 1,
  children: [
    { value: 2 },
    {
      value: 3,
      children: [{ value: 4 }, { value: 5 }],
    },
  ],
};

const stringTree: TreeNode<string> = {
  value: "root",
  children: [{ value: "child1" }, { value: "child2" }],
};
