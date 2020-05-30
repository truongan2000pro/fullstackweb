// const libary = require('./libary')
// const number= libary.number
const { number, number2 } = require("./libary");
const { string } = require("../libary2");
console.log(number, number2);
console.log(string);

// require from build-in libaries

const path = require("path");
const fs = require("fs");
const cp = require("child_process");
const crypto = require("crypto");
const zlib = require("zlib");
const util = require("util");
let folderPath = "C:/Users/ACER/OneDrive/Desktop/session4/libary2";
let fileName = "index.js";
let filePath = path.join(folderPath, fileName);
// path
// console.log(path.join(folderPath, filePath));
console.log(path.join(__dirname, "sever.js"));
console.log(path.parse(folderPath));

// fs
console.log(fs.readFileSync(filePath).toString("utf-8"));
// const readFileCanAwait = util.promisify(fs.readFile);
// await readFileCanAwait(filePath);
console.log(fs.existsSync(filePath));
console.log(fs.existsSync(folderPath));
console.log(fs.statSync(folderPath).isFile()); //false
console.log(fs.statSync(folderPath).isDirectory()); // true
// fs.unlink remove file
// fs.rmdir remove directory
// fs.rename
// fs.readdir read all files in directory

// child-process
const result = cp.execSync("dir");
console.log("dir result", result.toString("utf-8"));

// crypto
function hashMd5(str) {
  return crypto.createHash("md5").update(str).digest("hex");
}
let str = "An Béo";
let hashStr = hashMd5(str);
console.log(str, hashStr);

// zlib

let text =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
let bufferZipped = zlib.deflateSync(text);
let strZipped = bufferZipped.toString("base64");

let buffer = Buffer.from(strZipped, "base64");
let strUnZipped = zlib.inflateSync(bufferZipped);

console.log(buffer);
console.log(bufferZipped);
console.log(strUnZipped.toString("utf-8"));
