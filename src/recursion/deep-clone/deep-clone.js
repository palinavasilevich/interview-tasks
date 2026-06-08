function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== "object") return value;

  if (seen.has(value)) return seen.get(value);

  const cloned = Array.isArray(value) ? [] : {};
  seen.set(value, cloned);

  for (const key in value) {
    // if (Object.prototype.hasOwnProperty.call(value, key)) {
    //   cloned[key] = deepClone(value[key], seen);
    // }

    if (Object.hasOwn(value, key)) {
      cloned[key] = deepClone(value[key], seen);
    }
  }

  return cloned;
}

const obj = {
  x: 1,
  y: {
    z: 2,
    t: 3,
  },
};

const objCopy = deepClone(obj);
console.log(objCopy);

objCopy.y.z = 100;

console.log(objCopy.y.z); // 100
console.log(obj.y.z); // 2
