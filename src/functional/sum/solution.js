function sum(a) {
  function inner(b) {
    return sum(a + b);
  }

  inner.valueOf = () => a;
  return inner;
}
