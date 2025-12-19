const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  incentive: Number,
  status: {
    type: String,
    enum: ["Open", "Accepted", "Completed", "Approved"],
    default: "Open"
  },
  serviceman: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
  feedback: String
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
