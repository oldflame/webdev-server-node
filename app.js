var express = require("express"),
  session = require("express-session"),
  mongoStore = require("connect-mongo")(session),
  bodyParser = require("body-parser");

var app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dhavaldedhia:dhavaldedhia@cluster0-zrpal.mongodb.net/assignment_9?retryWrites=true&w=majority"
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/quiz.controller.server")(app);
require("./controllers/question.controller.server")(app);
require("./controllers/quiz-attempts.controller.server")(app);

app.get("/hello", (req, res) => res.send("hello world!"));

app.listen(process.env.PORT || 3000);
