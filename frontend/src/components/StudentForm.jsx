import React, { useEffect, useState } from 'react';

const emptyForm = {
  studentName: '', rollNumber: '', department: '', email: '',
  technicalSkills: '', aptitudeScore: '', communicationSkills: 'Good',
  placementReadiness: 'In Progress'
};

export default function StudentForm({ initialData, onSubmit, submitting }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        technicalSkills: Array.isArray(initialData.technicalSkills)
          ? initialData.technicalSkills.join(', ') : ''
      });
    } else setForm(emptyForm);
  }, [initialData]);

  const change = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = (event) => {
    event.preventDefault();
    onSubmit({
      ...form,
      technicalSkills: form.technicalSkills.split(',').map(s => s.trim()).filter(Boolean),
      aptitudeScore: Number(form.aptitudeScore)
    });
  };

  return (
    <form className="student-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Student Name<input name="studentName" value={form.studentName} onChange={change} required placeholder="Enter full name" /></label>
        <label>Roll Number<input name="rollNumber" value={form.rollNumber} onChange={change} required placeholder="e.g. 24IT001" /></label>
        <label>Department<input name="department" value={form.department} onChange={change} required placeholder="e.g. Information Technology" /></label>
        <label>Email<input type="email" name="email" value={form.email} onChange={change} required placeholder="student@example.com" /></label>
        <label className="full">Technical Skills <span className="hint">(comma-separated)</span><input name="technicalSkills" value={form.technicalSkills} onChange={change} placeholder="React, Node.js, Python" /></label>
        <label>Aptitude Score (0–100)<input type="number" name="aptitudeScore" min="0" max="100" value={form.aptitudeScore} onChange={change} required /></label>
        <label>Communication Skills
          <select name="communicationSkills" value={form.communicationSkills} onChange={change}>
            <option>Excellent</option><option>Good</option><option>Average</option><option>Needs Improvement</option>
          </select>
        </label>
        <label className="full">Placement Readiness
          <select name="placementReadiness" value={form.placementReadiness} onChange={change}>
            <option>Ready</option><option>In Progress</option><option>Not Ready</option>
          </select>
        </label>
      </div>
      <button className="button primary" disabled={submitting}>{submitting ? 'Saving...' : 'Save Student Skills'}</button>
    </form>
  );
}
