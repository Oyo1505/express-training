const {model, Schema} = require("mongoose");

const imagesSchema = new Schema({
    images : [String],
})

const Images = model("Image",imagesSchema)

module.exports = Images;