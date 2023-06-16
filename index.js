const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Yoo Node App");
})

const PORT = process.env.PORT || 4000;
console.log("PORT: ", PORT);
app.listen(PORT, () => {
  console.log("App running on port ", PORT);
})