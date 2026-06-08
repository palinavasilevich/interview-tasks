// function customMap(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const item = callback(array[i], i, array);
//     newArray.push(item);
//   }

//   return newArray;
// }

// Array.prototype.customMap = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     const item = callback(this[i], i, this);
//     newArray.push(item);
//   }

//   return newArray;
// };

function customMap(array, callback, thisArg) {
  const newArray = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      newArray[i] = callback.call(thisArg, array[i], i, array);
    }
  }

  return newArray;
}

Array.prototype.customMap = function (callback, thisArg) {
  const newArray = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      newArray[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return newArray;
};
