Function.prototype.call2 = function (context, ...args) {
  context = context ?? globalThis;

  const fnKey = Symbol("fn");
  context[fnKey] = this;

  const result = context[fnKey](...args);
  delete context[fnKey];

  return result;
};
