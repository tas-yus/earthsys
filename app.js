var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 3000;
var app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/alvaroapp", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
  res.redirect("/page1");
});

app.get("/page1", (req, res) => {
  res.render("page1");
});

app.get("/page2", (req, res) => {
  res.render("page2");
});

app.listen(port, () => {
  console.log("server started");
});
