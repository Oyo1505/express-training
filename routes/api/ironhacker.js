const mongoose = require("mongoose")
var express = require('express');
var router = express.Router();

const User = require("../../models/users.model")

router.get('/', function(req, res, next) {
    User
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch(err => next(err))
})

module.exports = router;
