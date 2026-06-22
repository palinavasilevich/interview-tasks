/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */

function flatten(value) {
  const result = [];

  function inner(item) {
    if (Array.isArray(item)) {
      for (const i of item) {
        inner(i);
      }
    } else {
      result.push(item);
    }
  }

  inner(value);

  return result;
}

function flattenV2(value) {
  const result = [];

  const copy = value.slice();

  while (copy.length) {
    const item = copy.shift();
    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}
