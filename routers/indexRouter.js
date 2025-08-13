const { Router } = require("express");
const path = require("path");
const indexRouter = Router();
const db = require("../db");

//call middleware
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: db.messages });
});

module.exports = indexRouter;
