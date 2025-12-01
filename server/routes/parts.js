// server/routes/parts.js
import express from "express";
import { allParts } from "../data/partsData.js";

const router = express.Router();

/**
 * @route   GET /api/parts
 * @desc    Return all keyboard parts
 */
router.get("/", (req, res) => {
  res.json(allParts);
});

/**
 * @route   GET /api/parts/:category
 * @desc    Return all parts for a specific category
 *          Example categories: size, switchType, keycap, cable, accessory
 */
router.get("/:category", (req, res) => {
  const { category } = req.params;
  const filtered = allParts.filter((part) => part.category === category);
  res.json(filtered);
});

export default router;
