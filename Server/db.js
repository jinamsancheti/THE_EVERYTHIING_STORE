import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "JINAM_KART",
  password: "Jainil2811*",
  port: 5432,
});
// db.connect();

// let result = await db.query("SELECT * FROM meme_data");
// console.log(result.rows);
// db.end();
// export default result.rows;

export default db;