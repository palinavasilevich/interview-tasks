// Task 1: Retrieving the type of an array element

type ArrayItem<T> = T extends (infer U)[] ? U : never;

type StringArray = string[];
type ItemType = ArrayItem<StringArray>; // string

type NumberArray = number[];
type NumItem = ArrayItem<NumberArray>; // number

type NotArray = ArrayItem<number>; // never (not an array)
