var express = require('express');
var router = express.Router();

const mongoose = require("mongoose")
const Images = require("../models/images.model")

/* GET home page. */
router.get('/', function(req, res, next) {
  // retrieve images from the folder /images
  const imagesPath = process.cwd() + "/public/images";
  const images = fs.readdirSync(imagesPath)
  res.render('index', { images })
  // Images
  //   .find()
  //   .then((images) => {
  //     res.locals.images = images
  //     res.render("index", { images })
  //   })
  //   .catch(err => console.error(err))
});

module.exports = router;
