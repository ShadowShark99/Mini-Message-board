const db = require("../db/queries");

exports.newGet = (req, res) => {
  res.render("form");
};

exports.newPost = async (req, res) => {
  const {message, author} = req.body;
  await db.newMessage({username: author, text: message});
  res.redirect("/");
}