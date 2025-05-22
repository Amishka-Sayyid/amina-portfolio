//import packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//start or configure packages
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//create a root route
app.get("/", (req, res) => {
  res.send("This is the root route!");
});

//set up a port for the server by listening...
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// -------------------------------
//creating db pool
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// ----------------------------------
//route to read all contacts
app.get("/contactDetails", async (req, res) => {
  const result = await db.query("SELECT * FROM portfolio");
  res.json(result.rows);
});

// ---------------------------------
//creating routes to insert data
app.post("/contact", async (req, res) => {
  // console.log(req.body);

  const { name, email, message } = req.body;
  try {
    await db.query(
      "INSERT INTO portfolio (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("DB insert error:", error);
    res.status(500).send({ error: "Failed to save message" });
  }
});
