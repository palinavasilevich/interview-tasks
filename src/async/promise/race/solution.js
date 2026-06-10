function race(promises) {
  const arr = Array.from(promises);
  if (arr.length === 0) return new Promise(() => {});

  return new Promise((resolve, reject) => {
    arr.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}
