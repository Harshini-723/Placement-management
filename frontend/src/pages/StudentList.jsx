import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteStudent, getStudents } from '../services/studentService';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadStudents = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const result = await getStudents();
      setStudents(Array.isArray(result.data) ? result.data : (Array.isArray(result.data?.data) ? result.data.data : []));
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to fetch records. Make sure the backend and MongoDB are running.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadStudents(); }, [loadStudents]);

  const remove = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student record?')) return;
    try {
      await deleteStudent(id);
      setStudents(current => current.filter(student => student._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to delete record');
    }
  };

  return (
    <section className="page">
      <div className="page-heading">
        <div><div className="eyebrow">RECORD MANAGEMENT</div><h1>Student Skill List</h1><p>All student assessment records stored in the database.</p></div>
        <Link className="button primary" to="/add-student">＋ Add Student</Link>
      </div>
      {error && <div className="alert">{error}</div>}
      {loading ? <p className="notice">Loading records...</p> : (
        <div className="panel table-panel">
          <div className="table-toolbar"><strong>{students.length} Student Record{students.length === 1 ? '' : 's'}</strong><button className="button secondary small" onClick={loadStudents}>Refresh</button></div>
          {students.length === 0 ? <div className="empty"><h3>No student records yet</h3><p>Add a student to see assessment details here.</p><Link to="/add-student" className="button primary">Add First Student</Link></div> : (
            <div className="table-wrap"><table>
              <thead><tr><th>Student</th><th>Roll Number</th><th>Department</th><th>Technical Skills</th><th>Aptitude</th><th>Communication</th><th>Readiness</th><th>Actions</th></tr></thead>
              <tbody>{students.map(student => (
                <tr key={student._id}>
                  <td><strong>{student.studentName}</strong><small>{student.email}</small></td>
                  <td>{student.rollNumber}</td><td>{student.department}</td>
                  <td>{student.technicalSkills?.join(', ') || '—'}</td><td>{student.aptitudeScore}/100</td>
                  <td>{student.communicationSkills}</td>
                  <td><span className={`status ${student.placementReadiness === 'Ready' ? 'ready' : student.placementReadiness === 'Not Ready' ? 'not-ready' : 'progress'}`}>{student.placementReadiness}</span></td>
                  <td><div className="row-actions"><Link className="text-button" to={`/edit-student/${student._id}`}>Edit</Link><button className="text-button danger" onClick={() => remove(student._id)}>Delete</button></div></td>
                </tr>
              ))}</tbody>
            </table></div>
          )}
        </div>
      )}
    </section>
  );
}
