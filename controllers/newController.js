const db = require("../db");

exports.newGet = (req, res) => {
  res.render("form");
};

exports.newPost = (req, res) => {
  db.messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
}