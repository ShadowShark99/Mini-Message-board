const pool = require("./pool");

async function getAllMessages(){
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id){
  const {rows} = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
}

async function newMessage(message){
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [message.username, message.text]);
}

async function deleteMessage(message){

}

module.exports = {
  getAllMessages,
  getMessage,
  newMessage,
};