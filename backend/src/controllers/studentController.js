const mongoose = require('mongoose');
const StudentSkill = require('../models/StudentSkill');

const validId = (id) => mongoose.Types.ObjectId.isValid(id);

exports.createStudent = async (req, res, next) => {
  try {
    const student = await StudentSkill.create(req.body);
    res.status(201).json({ success: true, message: 'Student skill record created', data: student });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ success: false, message: 'Roll number already exists' });
    next(error);
  }
};

exports.getStudents = async (_req, res, next) => {
  try {
    const students = await StudentSkill.find().sort({ createdAt: -1 });
    res.json({ success: true, count: students.length, data: students });
  } catch (error) { next(error); }
};

exports.getStudentById = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid student ID' });
    const student = await StudentSkill.findById(req.params.id);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
    res.json({ success: true, data: student });
  } catch (error) { next(error); }
};

exports.updateStudent = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid student ID' });
    const student = await StudentSkill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
    res.json({ success: true, message: 'Student skill record updated', data: student });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ success: false, message: 'Roll number already exists' });
    next(error);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid student ID' });
    const student = await StudentSkill.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
    res.json({ success: true, message: 'Student skill record deleted', data: student });
  } catch (error) { next(error); }
};
