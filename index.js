const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");

mongoose
  .connect(
    "mongodb+srv://rubenbaskaran:" +
      config.development.database.password +
      "@reacttutorialmongodb-hkyfr.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000);
