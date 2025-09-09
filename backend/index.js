// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.mongo_connect_string; // 👈 must match .env
const client = new MongoClient(uri);

let collection;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// connect to DB
const connect_db = async () => {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(process.env.MONGO_DB); 
    collection = db.collection(process.env.MONGO_COLLECTION); 
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  }
};

app.post("/api/newUser", async (req, res) => {
  try {
    if (!collection) {
      return res.status(500).json({ error: "DB not initialized yet" });
    }

    const result = await collection.insertOne(req.body);
    res.json({ insertedId: result.insertedId });

    await transporter.sendMail({
      from: `"New User Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "🚀 New User Added to MongoDB",
      text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
    });

        
    await transporter.sendMail({
      from: `"New User Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_SUFY,
      subject: "🚀 New User Added to MongoDB",
      text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
    });

    console.log("📧 Email sent for new entry");


  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Insert failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connect_db(); // 👈 connect before handling requests
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
