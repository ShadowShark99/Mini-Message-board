const { Router } = require("express");
const path = require("path");
const newRouter = Router();
const db = require("../db");

//call middleware
newRouter.get("/", (req, res) => {
  res.render("form");
});
newRouter.post("/", (req, res) => {
  db.messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
