const pool = require("./pool");

async function getAllMessages(){
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMessage(message){
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [message.username, message.text]);
}

module.exports = {
  getAllMessages,
  newMessage,
};