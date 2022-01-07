var express = require('express');
var router = express.Router();

const mongoose = require("mongoose")
const Images = require("../models/images.model")

/* GET home page. */
router.get('/', function(req, res, next) {
  // I don't understand this part but is this?
  // Can't hear you
  Images
    .find()
    .then((images) => {
      res.locals.images = images
      res.render("index", { images })
    })
    .catch(err => console.error(err))
});

module.exports = router;
