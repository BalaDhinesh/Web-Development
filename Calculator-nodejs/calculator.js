const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(7000, function () {
  console.log(__dirname);
  console.log("Server has started running on port 6000");
});
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send(`Sum of num1 and num2 is ${result}`);
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
