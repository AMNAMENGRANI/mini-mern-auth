import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// 👇 HOME ROUTE (fix "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// example route (optional)
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
