require("dotenv").config();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGO_URI;

console.log(MONGODB_URI);
mongoose
  .connect(String(MONGODB_URI))
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
