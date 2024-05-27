require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("HEllO Motto");
});
app.listen(PORT, () => {
  console.log(`This port is running on ${PORT}`);
});
