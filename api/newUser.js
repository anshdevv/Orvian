import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const uri = process.env.MONGO_CONNECT_STRING;

let client;
let collection;

async function connectToDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db(process.env.MONGO_DB);
    collection = db.collection(process.env.MONGO_COLLECTION);
  }
  return collection;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

    // Send email to first recipient
    await transporter.sendMail({
      from: `"New User Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "🚀 New User Added to MongoDB",
      text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
    });

    // Send email to second recipient
    await transporter.sendMail({
      from: `"New User Bot" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_SUFY,
      subject: "🚀 New User Added to MongoDB",
      text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
    });

    console.log("📧 Emails sent for new entry");

    return res.status(200).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error("Insert error:", err);
    return res.status(500).json({ error: "Insert failed" });
  }
}


