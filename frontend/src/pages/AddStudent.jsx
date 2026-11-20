import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import { createStudent, getStudent, updateStudent } from '../services/studentService';

export default function AddStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    getStudent(id)
      .then(result => setInitialData(result.data))
      .catch(err => setError(err.response?.data?.message || 'Unable to load student record'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (student) => {
    setSubmitting(true);
    setError('');
    try {
      if (id) await updateStudent(id, student);
      else await createStudent(student);
      navigate('/students');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not save record. Check that the backend and MongoDB are running.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="notice">Loading student details...</p>;

  return (
    <section className="page">
      <div className="page-heading">
        <div><div className="eyebrow">STUDENT ASSESSMENT</div><h1>{id ? 'Update Student Skills' : 'Add Student Skills'}</h1><p>Enter the student’s information and assessment details.</p></div>
        <Link className="button secondary" to="/students">View Student List</Link>
      </div>
      {error && <div className="alert">{error}</div>}
      <div className="panel"><StudentForm initialData={initialData} onSubmit={handleSubmit} submitting={submitting} /></div>
    </section>
  );
}
