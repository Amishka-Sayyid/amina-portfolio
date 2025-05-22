//import packages
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

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

  // 1. Save to DB
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

  // 2. Send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Portfolio Contact Form Submission",
    text: `You got a message from ${name} (${email}):\n\n\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});
