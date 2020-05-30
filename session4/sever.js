const express = require("express");

const app = express();
const port = 9000;
const bodyParser = require("body-parser");

const middleware1 = (req, res, next) => {
  console.log("from m1", req.method);
  next();
};
const middleware2 = (req, res, next) => {
  console.log("from m2", req.path);
  next();
};
app.use(middleware1);
app.use(middleware2);
// middleware run before app.get or app.post ,.....
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  // req.body,req.method,req.header,req.quyery
  // res.send,res.header,res.stt,res.end(),res.json(),res.status()
  console.log("from handler");
  res.status(200).send("Helo");
});
app.post("/test", (req, res) => {
  console.log(req.body);
  res.send("Post to /test");
});
app.listen(port, (err) => {
  if (err) {
    console.error("sever open failed!" + err);
  } else {
    console.log("successed " + port);
  }
});
