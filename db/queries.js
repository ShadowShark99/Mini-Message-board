const pool = require("./pool");

async function getAllMessages(){
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMessage(message){
  await pool.query("INSERT INTO messages (user, text, date) VALUES ($1)", [message]);
}

module.exports = {
  getAllMessages,
  newMessage,
};