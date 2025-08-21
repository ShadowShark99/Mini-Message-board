require('dotenv').config();
const {Client} = require("pg");
const {argv} = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 1000 ),
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO messages (username, text) 
VALUES
  ('Shu', 'Hii Chat'),
  ('Vox', 'What a pleasant morning it is?');
`;

async function main() {
  console.log("seeding...");
  let url = process.env.DB_URL;
  if (argv.length > 2)
    url = argv[3];
  const client = new Client({
    connectionString: url,
  });
  await client.connect();
  console.log("connected");
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();