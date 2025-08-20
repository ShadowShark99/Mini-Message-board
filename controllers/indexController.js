const db = require("../db");

exports.messagesGet = async (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: db.messages });
};

exports.messagesPost = async (req, res) => {
  console.log("Post");
  const i = parseInt(req.body.index, 10);
  const message = db.messages[i];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { message });
}