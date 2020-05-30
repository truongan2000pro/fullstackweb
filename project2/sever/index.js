const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = require("./router");
const app = express();
const port = 9000;
const publicPath = path.join(__dirname, "../public");
//middleware
app.use(bodyParser.json()); //read body of client requi

// routing
// static routing(hosting)
app.use("/", express.static(publicPath));
// APIs routing
app.use("/api", router);

//error handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// listen
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("sever opened at port " + port);
  }
});
