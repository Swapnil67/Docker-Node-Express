const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { MONGO_USER, MONGO_HOST, MONGO_PORT, MONGO_PASSWORD: mongo_pass } = require("./config/config");
const MONGO_PASSWORD = encodeURIComponent(mongo_pass);
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;

main().catch(err => console.log(err));

async function main() {
  // console.log(MONGO_URL);
  await mongoose.connect (MONGO_URL)
            .then(() => console.log("Successfully connected to DB"))
            .catch((err) => console.log("Error in connection: ", err))
}


app.get("/", (req, res) => {
  res.send("Yoo Node App!!!");
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("App running on port ", PORT);
})

// mongodb://swapnil:Swapnil%4067@mongo:27017/?authSource=admin
// mongodb://swapnil:Swapnil%254067@mongo:27017/?authSource=admin