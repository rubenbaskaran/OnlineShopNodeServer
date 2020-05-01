const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { User } = require("./model/user");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

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

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(5000);
