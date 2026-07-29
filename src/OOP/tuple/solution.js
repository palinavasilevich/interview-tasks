function Tuple(...data) {
  if (!(this instanceof Tuple)) {
    return new Tuple(...data);
  }

  this.data = Object.freeze([...data]);
}

Tuple.prototype.equals = function (tuple) {
  if (!(tuple instanceof Tuple)) {
    return false;
  }

  if (tuple.data.length !== this.data.length) {
    return false;
  }

  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i] !== tuple.data[i]) {
      return false;
    }
  }

  return true;
};

const colors1 = Tuple("red", "yellow", "green");
const colors2 = Tuple("red", "yellow", "green");
const colors3 = Tuple("red", "green", "blue");

console.log(colors1.equals(colors2)); // true
console.log(colors1.equals(colors3)); // false
console.log(colors1.equals("xxx")); // false
console.log(colors1 instanceof Tuple); // true
