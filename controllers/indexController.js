const db = require("../db/queries");

exports.messagesGet = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages, });
};

exports.messagesPost = async (req, res) => {
  const i = parseInt(req.body.index, 10);
  const message = await db.getMessage(i);
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("messageOpen", { message });
}

exports.deletePost = async (req,res) => {
  const i = parseInt(req.body.index, 10);
  //console.log(i);
  await db.deleteMessage(i);
  res.redirect("/");
}