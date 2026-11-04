// server/index.js
import express from "express";
import cors from "cors";
import partsRouter from "./routes/parts.js";

const app = express();

// ==============================
// Middleware
// ==============================

// Enable Cross-Origin Resource Sharing (CORS)
const allowedOrigins = [
  process.env.CLIENT_URL, // https://keyboard-builder-beta.vercel.app
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        /^https:\/\/keyboard-builder-[a-z0-9-]+\.vercel\.app$/.test(origin)
      ) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);

// Parse incoming JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Keyboard Builder API is running!");
});

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
  console.log(`🚀 Server running on port ${PORT}`);
});
