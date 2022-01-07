var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const User = require("../models/users.model");

router.get("/", function (req, res, next) {
  User.find()
    .then((users) => {
      console.log(users);
      res.render("allUsers", { users, css: ["user"] });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
