function and(p1, p2) {
  return new Promise((resolve, reject) => {
    const results = new Array(2);
    let remaining = 2;

    Promise.resolve(p1).then((value) => {
      results[0] = value;
      remaining -= 1;
      if (remaining === 0) resolve(results);
    }, reject);

    Promise.resolve(p2).then((value) => {
      results[1] = value;
      remaining -= 1;
      if (remaining === 0) resolve(results);
    }, reject);
  });
}

function andV2(p1, p2) {
  return Promise.all([p1, p2]);
}

and(Promise.resolve(1), Promise.resolve(2)).then(
  (values) => console.log("fulfilled", values), // ✓ fulfilled [1, 2]
  (reason) => console.log("rejected", reason),
);

and(Promise.reject(1), Promise.resolve(2)).then(
  (values) => console.log("fulfilled", values),
  (reason) => console.log("rejected", reason), // ✓ rejected 1
);

andV2(Promise.resolve(1), Promise.resolve(2)).then(
  (values) => console.log("fulfilled", values), // ✓ fulfilled [1, 2]
  (reason) => console.log("rejected", reason),
);

andV2(Promise.reject(1), Promise.resolve(2)).then(
  (values) => console.log("fulfilled", values),
  (reason) => console.log("rejected", reason), // ✓ rejected 1
);
