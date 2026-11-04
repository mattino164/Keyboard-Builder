// server/index.js
import express from "express";
import cors from "cors";
import partsRouter from "./routes/parts.js";

const app = express();

// ==============================
// Middleware
// ==============================

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
  })
);

// Parse incoming JSON requests
app.use(express.json());

// ==============================
// Routes
// ==============================

// API endpoint for keyboard parts
app.use("/api/parts", partsRouter);

// ==============================
// Start server
// ==============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
