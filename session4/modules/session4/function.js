function sum(a, b) {
  console.log(arguments); // [value a,value b]
  return a + b;
}
// 1. arguments
console.log(sum.length); // numbers arguments = 2
sum(1, 2);

function log() {
  let dataToLog = arguments;
  for (let item of dataToLog) {
    console.log(item);
  }
}
function log1(...dataToLog) {
  for (let item of dataToLog) {
    console.log(item);
  }
}
let data = [1, 2, 3, 4];
console.log(...data);

//2. async function vs Sync function vs callback function
// async function: function return a promise
// callback function: async function require a callback

function doTask(callback) {
  console.log("do task");
  callback();
}
doTask(function () {
  console.log("done");
});

let fs = require("fs");
fs.readFile(`C:/Users/ACER/OneDrive/Desktop/session4/sever.js`, function (
  err,
  fileContent
) {
  console.log("read file done");
  //   console.log(fileContent.toString());
});

//promise exemple

let promise1 = new Promise(function (resolve, reject) {
  let random = parseInt(Math.random() * 10);
  if (random % 2 == 0) {
    resolve();
  } else {
    reject(new Error("Number must be event", random));
  }
});

// async function
// async/await : await only available when place before an promise
function readFileAsync(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, fileContent) {
      if (err) {
        reject(err);
      } else {
        resolve(fileContent);
      }
    });
  });
}
async function run() {
  let file1 = await readFileAsync(
    `C:/Users/ACER/OneDrive/Desktop/session4/sever.js`
  );
  //   console.log(file1);
}

// pure function vs Impure function
// pure function 1 input 1 output
function minus(a, b) {
  // a b is the input
  return a - b; // the output can only have 1 output with each a,b
}
// Impure function 1 input a can have many output
let number = 0;
function sumImpure(a) {
  // a is the input
  result = number + a; // the result can be effected with number variable
  return result;
}
// 3. this vs .bind()
function printThis() {
  console.log(this);
}
printThis(); // global
let containerA = {
  name: "A",
  printThis: printThis(),
};
containerA.printThis; // {name:"A"}
let containerB = {
  name: "B",
  printThis: printThis.bind(containerA),
  // we can bind() anything to a funtion
};
containerB.printThis; // {name:"A"}

// arrow function
const multi = (a, b) => {
  return a * b;
};
// or you can write like this
const divine = (a, b) => a / b; // auto bind this

const l1ib = {
  number: 10,
  log: console.log(this.number),
};
l1ib.log;
