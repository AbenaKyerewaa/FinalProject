const express = require("express");
const db      = require("../db");
const jwt     = require("jsonwebtoken");
const router  = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

// ── SAVE PROFILE (after signup) ──
router.post("/setup", verifyToken, (req, res) => {
  const { fullName, dob, gender, address, ministry } = req.body;
  const userId = req.user.id;

  db.query(
    "UPDATE users SET full_name=?, dob=?, gender=?, address=?, ministry=? WHERE id=?",
    [fullName, dob, gender, address, ministry, userId],
    (err) => {
      if (err) return res.status(500).json({ message: "Profile update failed" });
      res.json({ message: "Profile saved successfully" });
    }
  );
});

// ── GET LOGGED-IN USER PROFILE ──
router.get("/me", verifyToken, (req, res) => {
  db.query(
    "SELECT id, full_name, email, phone, dob, gender, address, ministry, membership_id, role FROM users WHERE id=?",
    [req.user.id],
    (err, results) => {
      if (err || results.length === 0)
        return res.status(404).json({ message: "User not found" });
      res.json(results[0]);
    }
  );
});

module.exports = router;