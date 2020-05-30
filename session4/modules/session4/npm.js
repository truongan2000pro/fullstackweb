// npm -- node packet manager
const _ = require("lodash");
let arr = [1, 2, [3, 4], 5];
arrFlattened = _.flatten(arr);
console.log(arrFlattened); // [1,2,3,4,5]

let sum = _.sumBy(
  [
    {
      age: 1,
    },
    { age: 2 },
  ],
  (item) => item.age
);
console.log(sum);

let obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
};
let value = _.get(obj, "a.b.c.d");
console.log(value);
