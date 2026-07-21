Object.prototype.get = function (path) {
  let current = this;

  for (const key of path.split(".")) {
    if (current == null) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};

Object.prototype.getV2 = function (path) {
  return path.split(".").reduce((obj, key) => obj?.[key], this);
};

const obj = {
  b: {
    x: 1,
  },
  a: {
    m: {
      n: {
        y: 8,
      },
    },
  },
};

console.log(obj.get("b")); // { x: 1 }
console.log(obj.get("b.x")); // 1
console.log(obj.get("b.m")); // undefined
console.log(obj.get("b.q.w.e")); // undefined
