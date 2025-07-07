import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

const FormSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

const FormEntry = mongoose.model("FormEntry", FormSchema);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/api/form", async (req, res) => {
  const entry = new FormEntry(req.body);
  await entry.save();
  res.status(201).json({ message: "Form saved" });
});

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.get("/api/admin/data", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    const entries = await FormEntry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch {
    res.status(403).json({ error: "Unauthorized" });
  }
});

app.delete("/api/admin/data/:id", async (req, res) => {
  try {
    await FormEntry.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete" });
  }
});

app.listen(5000, () => console.log(" Server running at http://localhost:5000"));
