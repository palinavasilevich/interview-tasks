class TimeLimitedCache {
  #cache = new Map();

  set(key, value, duration) {
    const hasKey = this.#cache.has(key);

    if (hasKey) {
      clearTimeout(this.#cache.get(key).timerId);
    }

    const timerId = setTimeout(() => {
      this.#cache.delete(key);
    }, duration);

    this.#cache.set(key, {
      value,
      timerId,
    });

    return hasKey;
  }

  get(key) {
    if (!this.#cache.has(key)) {
      return -1;
    }

    return this.#cache.get(key).value;
  }

  count() {
    return this.#cache.size;
  }
}
const cache = new TimeLimitedCache();

setTimeout(() => console.log(cache.set(1, 500, 450)), 0); // false
setTimeout(() => console.log(cache.get(1)), 100); // 500
setTimeout(() => console.log(cache.set(2, 600, 350)), 200); // false
setTimeout(() => console.log(cache.get(2)), 300); // 600
setTimeout(() => console.log(cache.count()), 400); // 2
setTimeout(() => console.log(cache.set(2, 800, 250)), 500); // true
setTimeout(() => console.log(cache.count()), 600); // 1
setTimeout(() => console.log(cache.get(2)), 700); // 800
