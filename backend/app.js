const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homeRoute = require("./routes/home");
const userRoute = require("./routes/user");
require("dotenv/config");

// import Route
app.use(cors());
app.use(bodyParser.json());

// connect to mongoose server
mongoose.connect(process.env.NOKSHA_DB, () => {
  console.log("Connected to DB?");
});

// Route configuration
app.use("/", homeRoute);
app.use("/user", userRoute);

app.all("*", (req, res, next) => {
  console.log(`not found ${req.originalUrl}`);
  return;
});

// start listening
app.listen(3000);
