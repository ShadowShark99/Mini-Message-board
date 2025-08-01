const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Message Board");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My second express app - listning on PORT: ${PORT}`);
});
