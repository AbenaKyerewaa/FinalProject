const express = require("express");
const bcrypt  = require("bcryptjs");
const jwt     = require("jsonwebtoken");
const db      = require("../db");
const router  = express.Router();

// ── SIGNUP ──
router.post("/signup", async (req, res) => {
  const { fullName, phone, password } = req.body;

  if (!fullName || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if phone already exists
  db.query("SELECT * FROM users WHERE phone = ?", [phone], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (results.length > 0) {
      return res.status(400).json({ message: "Phone number already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    // Insert with PENDING first so we can get the insertId
    db.query(
      "INSERT INTO users (full_name, phone, password, membership_id) VALUES (?, ?, ?, ?)",
      [fullName, phone, hashed, "PENDING"],
      (err, result) => {
        if (err) {
          console.error("Insert error:", err);
          return res.status(500).json({ message: "Signup failed" });
        }

        // Generate membership ID using the real insertId
        const membershipId = "MUS-" + String(result.insertId).padStart(4, "0");

        // Update the record with the proper membership ID
        db.query(
          "UPDATE users SET membership_id = ? WHERE id = ?",
          [membershipId, result.insertId],
          (err2) => {
            if (err2) console.error("ID update error:", err2);
          }
        );

        const token = jwt.sign(
          { id: result.insertId, role: "member" },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );

        res.json({
          message: "Signup successful",
          token,
          user: {
            id:           result.insertId,
            fullName,
            phone,
            role:         "member",
            membershipId,
          },
        });
      }
    );
  });
});

// ── LOGIN ──
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: "Phone and password are required" });
  }

  db.query("SELECT * FROM users WHERE phone = ?", [phone], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid phone number or password" });
    }

    const user  = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid phone number or password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id:           user.id,
        fullName:     user.full_name,
        phone:        user.phone,
        role:         user.role,
        membershipId: user.membership_id,
        ministry:     user.ministry,
      },
    });
  });
});

module.exports = router;