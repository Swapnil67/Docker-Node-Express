const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { MONGO_USER, MONGO_HOST, MONGO_PORT, MONGO_PASSWORD: mongo_pass, REDIS_HOST, REDIS_PORT, SESSION_SECRET } = require("./config/config");

const postRouter = require("./routes/routes");
const userRouter = require("./routes/userRoutes");

require("./db/redis_conn");
const sessionMiddleware = require("./middlewares/session");

const app = express();

const MONGO_PASSWORD = encodeURIComponent(mongo_pass);
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;

main().catch(err => console.log(err));

async function main() {
  // console.log(MONGO_URL);
  await mongoose.connect (MONGO_URL)
            .then(() => console.log("Successfully connected to DB"))
            .catch((err) => console.log("Error in connection: ", err))
}

app.enable('trust proxy');
app.use(cors({}));
app.use(sessionMiddleware);
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Load Balancing Working");
  return res.send("Yoo Node App!!!");
})

app.use("/posts", postRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("App running on port ", PORT);
});

