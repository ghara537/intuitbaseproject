const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log("they found us");
  res.send("You found us");
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
