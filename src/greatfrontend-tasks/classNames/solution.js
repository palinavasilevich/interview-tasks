/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const filteredArgs = args.flat(Infinity).filter((item) => item);

  return filteredArgs
    .reduce((result, item) => {
      if (typeof item === "object") {
        for (const [key, value] of Object.entries(item)) {
          if (value) {
            result.push(key);
          }
        }

        return result;
      }

      result.push(item);

      return result;
    }, [])
    .join(" ");
}

console.log(classNames("foo", "bar")); // 'foo bar'
console.log(classNames("foo", { bar: true })); // 'foo bar'
console.log(classNames({ "foo-bar": true })); // 'foo-bar'
console.log(classNames({ "foo-bar": false })); // ''
console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
console.log(classNames("a", ["b", { c: true, d: false }])); // 'a b c'
console.log(
  classNames(
    "foo",
    {
      bar: true,
      duck: false,
    },
    "baz",
    { quux: true },
  ),
); // 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, { baz: null }, "")); // 'bar'
