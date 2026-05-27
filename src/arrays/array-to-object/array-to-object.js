export function arrayToObject(arr) {
  return arr.reduce((acc, currentValue) => {
    const { name, value } = currentValue;

    acc[name] = value;

    return acc;
  }, {});
}
