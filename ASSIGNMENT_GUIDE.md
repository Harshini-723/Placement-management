# Question-wise assignment guide

Use one integrated application for all three questions, as the assignment describes one Placement Skill Monitoring Management System.

## Question 1 – React, React Router and REST APIs (5 marks)

**Aim:** Develop the student skill management interface and REST endpoints.

**Frontend files:**
- `frontend/src/App.jsx` – `BrowserRouter`, `Routes`, `Route`, `Link`, page routes.
- `frontend/src/pages/Home.jsx` – Home/dashboard page.
- `frontend/src/pages/AddStudent.jsx` – create/edit page.
- `frontend/src/pages/StudentList.jsx` – list and delete interface.
- `frontend/src/components/StudentForm.jsx` – student details, technical skills, aptitude, communication and readiness form.

**Backend files:**
- `backend/src/routes/studentRoutes.js` – POST, GET, PUT and DELETE route definitions.
- `backend/src/controllers/studentController.js` – REST request handling.

**Procedure:** Start both servers, navigate using the header links, add a record, view it, edit it and delete it.

**Outputs to attach:** Home page, Add Student Skills form, Student Skill List, successful edit and delete.

## Question 2 – Axios and displaying records (10 marks)

**Aim:** Connect React to Express using Axios and display records returned by the API.

**Files:**
- `frontend/src/services/api.js` – Axios instance and base URL.
- `frontend/src/services/studentService.js` – Axios GET/POST/PUT/DELETE functions.
- `frontend/src/pages/StudentList.jsx` – GET records and render the table.
- `frontend/src/components/StudentForm.jsx` and `frontend/src/pages/AddStudent.jsx` – submit POST/PUT operations.

**Procedure:** Open Student Skill List after adding sample records. In browser DevTools press F12 → Network → Fetch/XHR → reload. Select `students` GET request and show its Response tab.

**Outputs to attach:** React student table and Network request/response. Capture these from your running application.

## Question 3 – MongoDB and Mongoose (10 marks)

**Aim:** Store student skill details in MongoDB using Mongoose and verify CRUD.

**Files:**
- `backend/src/config/db.js` – MongoDB connection.
- `backend/src/models/StudentSkill.js` – Mongoose schema/model.
- `backend/src/controllers/studentController.js` – database create/read/update/delete.
- `backend/.env.example` – connection-string template.

**Database:** `placementDB`; collection: `studentskills`.

**Procedure:** Configure local MongoDB or Atlas, start the backend, insert at least one student from the form, then open Atlas → Browse Collections → `placementDB` → `studentskills`. Verify insert, update and delete by repeating the operations and refreshing the collection view.

**Outputs to attach:** Atlas database/collection with documents and evidence of CRUD operations.

## Write-up format for each question

1. Aim
2. Algorithm / Procedure
3. Source code (relevant files listed above)
4. Output printouts (your own screenshots)
5. Result

The assignment PDF also requires the GitHub implementation link highlighted on the front page.
