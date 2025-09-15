const supabase = require("./config");

const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // load .env file if you’re using one

const nodemailer = require("nodemailer");


const app = express();
app.use(cors({
  // origin: "http://localhost:8080",
  origin: "https://orvian-2.onrender.com/", // your Vite dev server
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));



app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // <-- parses JSON bodies
app.use(express.urlencoded({ extended: true })); // <-- parses URL-encoded bodies

// Catch-all: send index.html (for React Router / SPA)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));

});

// 🔹 Connect to MongoDB once and reuse
async function connectToDB() {
  const supabaseUrl = process.env.supabaseUrl
  const supabaseservicekey = process.env.SUPABASE_SERVICE_KEY
  const supabase = createClient(supabaseUrl, supabaseservicekey)
  return supabase
}


app.get("/api/demo", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("Clients")   // 👈 must match table name exactly
      .select("*");

    if (error) {
      console.error("❌ Supabase fetch error:", error.message);
      return res.status(500).json({ error: error.message });
    }

    console.log("📦 Supabase returned:", data);
    res.json(data);
  } catch (err) {
    console.error("🔥 Server error:", err.message);
    res.status(500).json({ error: err.message });
  }
});



// 🔹 POST route
app.post("/api/newuser", async (req, res) => {
 console.log("api hit");
try {
  const { fullName, email, phone, day, timeSlot, referral } = req.body;
  console.log(req.body)

  const { data, error } = await supabase
    .from("Clients")
    .insert([
      {
        fullName,
        email,
        phone,
        timeSlot,
        day,
        referral
      }
    ])
    .select(); // optional: return the inserted row(s)

  console.log("Inserted data:", data);
  console.log("Supabase error:", error);

  if (error) throw error;

  res.status(200).json({ message: "User inserted successfully", data });
} catch (err) {
  res.status(500).json({ error: err.message });
}

  // const result = await collection.insertOne(req.body);


  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASS,
  //     },
  //   });

  //   // Send to first recipient
  //   await transporter.sendMail({
  //     from: `"New User Bot" <${process.env.EMAIL_USER}>`,
  //     to: process.env.EMAIL_TO,
  //     subject: "🚀 New User Added to MongoDB",
  //     text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
  //   });

  //   // Send to second recipient
  //   await transporter.sendMail({
  //     from: `"New User Bot" <${process.env.EMAIL_USER}>`,
  //     to: process.env.EMAIL_TO_SUFY,
  //     subject: "🚀 New User Added to MongoDB",
  //     text: `A new user was added:\n\n${JSON.stringify(req.body, null, 2)}`,
  //   });

  //   console.log("📧 Emails sent for new entry");

  //   res.status(200).json({ insertedId: result.insertedId });
  // } catch (err) {
  //   console.error("Insert error:", err);
  //   res.status(500).json({ error: "Insert failed" });
  // }
});

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
