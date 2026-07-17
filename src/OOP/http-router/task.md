# HTTP Router

## Problem

Implement an `HttpRouter` class that maps `(endpoint, method)` pairs to handler functions.

- `addHandler(endpoint, method, fn)` registers `fn` as the handler for the given endpoint and HTTP method.
- `runRequest(endpoint, method)` invokes the matching handler and returns its result. If no handler is registered for that endpoint/method combination, it returns `"Error 404: Not Found"` instead of throwing.

## Examples

```ts
const router = new HttpRouter();

router.addHandler("/api/users", "GET", () => {
  return ["user1", "user2"];
});

router.addHandler("/api/users", "POST", () => {
  return "User added";
});

router.addHandler("/api/login", "POST", () => {
  return "OK";
});

router.runRequest("/api/users", "GET");  // ["user1", "user2"]
router.runRequest("/api/login", "POST"); // "OK"
router.runRequest("/api/login", "PUT");  // "Error 404: Not Found"
router.runRequest("/api/send", "POST");  // "Error 404: Not Found"
```

## Constraints

- The same endpoint can have different handlers per HTTP method
- An unknown endpoint, or a known endpoint with an unregistered method, must return the 404 string rather than throw
- Handlers can return arbitrary values (arrays, strings, objects) — the router must not erase that at the type level

## Notes

- Store handlers per endpoint as a `method -> fn` map (e.g. `Map<string, Map<string, Handler>>` or `Record<string, Handler>`) rather than an array of single-key objects. An array requires an O(n) linear `.find()` scan per request and, since `addHandler` never checks for an existing entry, re-registering the same endpoint/method appends a second entry instead of replacing the first — `.find()` then silently returns the *first* one ever registered, and the newer handler is never reachable.
- `this.#handlers.get(endpoint)` immediately after `this.#handlers.has(endpoint)` is not narrowed by TypeScript — `Map#get` still returns `T | undefined` from the compiler's point of view, so spreading it (`[...this.#handlers.get(endpoint)]`) fails to compile under `strictNullChecks`. Assign `this.#handlers.get(endpoint)` to a local variable once and branch on that, or use `?? []`, instead of calling `.get()` a second time.
- Type the handler as `() => unknown` (or a generic `<T>() => T`), not `() => void`. Handlers here actually return data (arrays/strings) that callers depend on; typing them `void` makes `runRequest`'s inferred return type `string | void`, so TypeScript rejects any code that tries to use the returned data even though it works fine at runtime.
