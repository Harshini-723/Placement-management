import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStudents } from '../services/studentService';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadDashboard = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await getStudents();
      setStudents(Array.isArray(result.data) ? result.data : []);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not load dashboard data. Check backend and MongoDB connection.');
    } finally { setLoading(false); }
  };

  useEffect(() => { loadDashboard(); }, []);

  const total = students.length;
  const active = students.filter(s => s.placementReadiness === 'Ready' || s.placementReadiness === 'In Progress').length;
  const inactive = students.filter(s => s.placementReadiness === 'Not Ready').length;
  const ready = students.filter(s => s.placementReadiness === 'Ready').length;

  return (
    <section className="hero">
      <div className="eyebrow">STUDENT DEVELOPMENT · PLACEMENT READINESS</div>
      <h1>Placement Skill<br /><span>Monitoring System</span></h1>
      <p>Record, review and improve students’ technical, aptitude and communication skills in one place.</p>
      <div className="actions">
        <Link className="button primary" to="/add-student">＋ Add Student Skills</Link>
        <Link className="button secondary" to="/students">View Student List</Link>
      </div>

      <div className="dashboard-heading">
        <div><h2>Dashboard Overview</h2><p>Live summary of student skill records</p></div>
        <button className="button secondary small" onClick={loadDashboard} disabled={loading}>{loading ? 'Refreshing...' : '↻ Refresh Stats'}</button>
      </div>
      {error && <div className="alert">{error}</div>}
      <div className="stats-grid">
        <article className="stat-card"><span className="stat-label">Total Students</span><strong>{loading ? '—' : total}</strong><small>All registered records</small></article>
        <article className="stat-card"><span className="stat-label">Active Students</span><strong>{loading ? '—' : active}</strong><small>Ready or in progress</small></article>
        <article className="stat-card"><span className="stat-label">Inactive Students</span><strong>{loading ? '—' : inactive}</strong><small>Marked not ready</small></article>
        <article className="stat-card"><span className="stat-label">Placement Ready</span><strong>{loading ? '—' : ready}</strong><small>Ready for placement</small></article>
      </div>
      {!loading && total === 0 && <p className="dashboard-empty">No records yet. Add a student to populate the dashboard.</p>}

      <div className="feature-grid">
        <article><div className="feature-icon">01</div><h3>Record Skills</h3><p>Maintain student details and skill assessments.</p></article>
        <article><div className="feature-icon">02</div><h3>Monitor Progress</h3><p>Review aptitude, communication and readiness.</p></article>
        <article><div className="feature-icon">03</div><h3>Manage Records</h3><p>Create, view, update and delete records.</p></article>
      </div>
    </section>
  );
}
