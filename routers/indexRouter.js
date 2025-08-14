const { Router } = require("express");
const path = require("path");
const indexRouter = Router();
const db = require("../db");

//call middleware
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: db.messages });
});
indexRouter.post("/message", (req, res) => {
  console.log("Post");
  const i = parseInt(req.body.index, 10);
  const message = db.messages[i];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { message });
});

module.exports = indexRouter;
