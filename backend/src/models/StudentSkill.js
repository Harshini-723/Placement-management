const mongoose = require('mongoose');

const studentSkillSchema = new mongoose.Schema({
  studentName: { type: String, required: true, trim: true },
  rollNumber: { type: String, required: true, trim: true, unique: true },
  department: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  technicalSkills: [{ type: String, trim: true }],
  aptitudeScore: { type: Number, required: true, min: 0, max: 100 },
  communicationSkills: {
    type: String,
    enum: ['Excellent', 'Good', 'Average', 'Needs Improvement'],
    required: true
  },
  placementReadiness: {
    type: String,
    enum: ['Ready', 'In Progress', 'Not Ready'],
    required: true
  }
}, { timestamps: true, collection: 'studentskills' });

module.exports = mongoose.model('StudentSkill', studentSkillSchema);
