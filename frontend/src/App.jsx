import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddStudent from './pages/AddStudent.jsx';
import StudentList from './pages/StudentList.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <Link className="brand" to="/">PSM <span>Placement Skill Monitor</span></Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-student">Add Student Skills</Link>
            <Link to="/students">Student Skill List</Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/edit-student/:id" element={<AddStudent />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer>Placement Skill Monitoring Management System · Full Stack Web Development</footer>
      </div>
    </BrowserRouter>
  );
}
