var express = require("express");
var faker = require("faker");
var cors = require("cors");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

var app = express();

var user = {
  username: "email@email.com",
  password: "123"
};

var jwtSecret = "fajfajfefiosj23215oda/3u23";

app.use(cors());
app.use(bodyParser.json());

app.get("/random-user", function(req, res) {
  var user = faker.helpers.userCard();
  user.avatar = faker.image.avatar();
  res.json(user);
});

app.post("/login", auth, function(req, res) {
  var token = jwt.sign(
    {
      username: user.username
    },
    jwtSecret
  );
  res.send({ token: token, user: user });
});

app.listen("3000", function() {
  console.log("App listening at localhost:3000");
});

// UTIL FUNCTIONS
function auth(req, res, next) {
  var body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end("must provide username and password");
  }
  if (!body.username !== user.username || !body.password !== user.password) {
    res.status(401).end("username or password do not match");
  }
  next();
}
