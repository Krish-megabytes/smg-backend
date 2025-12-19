const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const AuditLog = require("../models/AuditLog");

router.get("/", auth, async (req, res) => {
  const logs = await AuditLog.find().sort({ createdAt: -1 });
  res.json(logs);
});

module.exports = router;
