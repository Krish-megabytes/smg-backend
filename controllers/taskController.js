const Task = require("../models/Task");
const AuditLog = require("../models/AuditLog");

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);

  await AuditLog.create({
    action: "CREATED_TASK",
    user: req.user.id,
    role: "admin",
    taskTitle: task.title
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate("serviceman", "username");
  res.json(tasks);
};

exports.updateStatus = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  await AuditLog.create({
    action: `${req.body.status}_TASK`,
    user: req.user.id,
    role: req.user.role,
    taskTitle: task.title
  });

  res.json(task);
};
