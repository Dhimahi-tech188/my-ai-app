import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Fake AI logic
app.post("/ask", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "";

  if (msg.includes("hello")) {
    reply = "Hi! How can I help you? 😊";
  } else if (msg.includes("study")) {
    reply = "Make a timetable and stay consistent 📚";
  } else if (msg.includes("motivation")) {
    reply = "Keep going! You can do it 💪";
  } else if (msg.includes("math")) {
    reply = "Practice daily and understand concepts 📐";
  } else {
    reply = "I am still learning 🤖";
  }

  res.json({ reply });
});

// Show website
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
