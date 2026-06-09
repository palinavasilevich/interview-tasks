function allSettled(promises) {
  const arr = Array.from(promises);

  if (arr.length === 0) return Promise.resolve([]);

  const results = new Array(arr.length);
  let remaining = arr.length;

  return new Promise((resolve) => {
    arr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          remaining -= 1;
          if (remaining === 0) resolve(results);
        });
    });
  });
}

function allSettledV2(promises) {
  const arr = Array.from(promises);

  const wrap = (promise) =>
    Promise.resolve(promise)
      .then((value) => ({ status: "fulfilled", value }))
      .catch((reason) => ({ status: "rejected", reason }));

  return Promise.all(arr.map(wrap));
}
