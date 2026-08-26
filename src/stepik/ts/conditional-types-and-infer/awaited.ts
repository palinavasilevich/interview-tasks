// Task 5: Recursive Promise Expanding

type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type Promise1 = Promise<string>;
type Promise2 = Promise<Promise<Promise<number>>>;

type Result1 = MyAwaited<Promise1>; // string
type Result2 = MyAwaited<Promise2>; // number (expands all promises)
