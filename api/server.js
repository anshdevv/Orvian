const express = require("express");
const cors = require("cors");

const { MongoClient } = require("mongodb");
const nodemailer = require("nodemailer");
require("dotenv").config(); // load .env file if you’re using one

const app = express();
app.use(cors({
  origin: 'http://localhost:5000', // or '*'
  credentials: true
}));

const uri = process.env.MONGO_CONNECT_STRING;

let client;
let collection;

// 🔹 Connect to MongoDB once and reuse
async function connectToDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db(process.env.MONGO_DB);
    collection = db.collection(process.env.MONGO_COLLECTION);
  }
  return collection;
}

app.get("/api/demo",async(req,res)=>{
  res.send("hello world")
})


// 🔹 POST route
app.post("/api/newuser", async (req, res) => {
  try {
    const collection = await connectToDB();

    const result = await collection.insertOne(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send to first recipient
    await transporter.sendMail({
      from: `"New User Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "🚀 New User Added to MongoDB",
      text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
    });

    // Send to second recipient
    await transporter.sendMail({
      from: `"New User Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_SUFY,
      subject: "🚀 New User Added to MongoDB",
      text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
    });

    console.log("📧 Emails sent for new entry");

    res.status(200).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Insert failed" });
  }
});

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
