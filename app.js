const express = require("express");
const indexRouter = require("./routers/indexRouter");
const path = require("path");
const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// app.get("/", (req, res) => {
//   res.send("Message Board");
// });

//app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//call middleware
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My second express app - listning on PORT: ${PORT}`);
});
