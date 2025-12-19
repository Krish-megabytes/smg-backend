const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  action: String,
  user: String,
  role: String,
  taskTitle: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AuditLog", auditSchema);
