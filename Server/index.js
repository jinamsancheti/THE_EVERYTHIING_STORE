import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js";
const app = express();


const port = 4666;
db.connect();

app.use(cors());
app.use(express.json()); //req.body
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get("/", async (req, res) => {
	try {
		const allData = await db.query("SELECT * FROM meme_data");
		// console.log(allData.rows);
		res.json(allData.rows);
		
	} catch (err) {
		console.error(err.message);
	}
	// db.end();
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
