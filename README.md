# Placement Skill Monitoring Management System

Complete MERN-stack implementation for Velalar College of Engineering and Technology, 22ITT51 – Full Stack Web Development, Assignment 2.

## Assignment requirements covered

- Home, Add Student Skills and Student Skill List pages.
- React Router navigation using `BrowserRouter`, `Routes`, `Route` and `Link`.
- Student form: name, roll number, department, email, technical skills, aptitude score, communication skills and placement readiness.
- Express REST API: POST, GET (all/by ID), PUT and DELETE.
- Axios communication between React and Express.
- MongoDB persistence using Mongoose in database `placementDB`, collection `studentskills`.
- Dashboard totals: Total Students, Active Students (Ready + In Progress), Inactive Students (Not Ready), and Placement Ready.

## Requirements

- Node.js 18 or later and npm.
- MongoDB local server OR a MongoDB Atlas cluster.

## 1. Configure MongoDB

### MongoDB Atlas

1. Create a free/shared cluster in MongoDB Atlas.
2. Under **Database Access**, create a database user and password.
3. Under **Network Access**, add your current IP address. For a temporary classroom test only, `0.0.0.0/0` permits access from anywhere; remove it after testing.
4. Choose **Connect → Drivers → Node.js** and copy the connection string.
5. Copy `backend/.env.example` to `backend/.env` and replace the placeholders in `MONGODB_URI`.
6. Keep `/placementDB` in the URI path. URL-encode special characters in the password (for example `@` becomes `%40`).

Example format (not a real credential):

```env
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/placementDB?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

### Local MongoDB alternative

Use this in `backend/.env` instead:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/placementDB
CLIENT_URL=http://localhost:5173
```

MongoDB creates `placementDB` and `studentskills` after the first successful student record is inserted. A Mongoose schema alone does not create a visible collection.

## 2. Start backend (Terminal 1)

```bash
cd backend
npm install
```

Create `backend/.env` by copying `.env.example` and edit the MongoDB URI, then:

```bash
npm run dev
```

Expected terminal message includes `MongoDB connected successfully` and `Server running at http://localhost:5000`.

Check: open `http://localhost:5000/api/health`.

## 3. Start frontend (Terminal 2)

```bash
cd frontend
npm install
```

Copy `frontend/.env.example` to `frontend/.env`, then:

```bash
npm run dev
```

Open the Vite URL, normally `http://localhost:5173`.

## 4. Demonstrate CRUD

1. Home → confirm the dashboard cards appear (zero is valid before adding records).
2. Add Student Skills → enter a unique roll number and save.
3. Student Skill List → confirm the saved row appears.
4. Edit → change a skill/score/readiness and save; confirm the row updates.
5. Delete → confirm the row is removed.
6. Add at least three different readiness values (`Ready`, `In Progress`, `Not Ready`) to demonstrate all dashboard counts.
7. In Atlas, open **Browse Collections** → `placementDB` → `studentskills` and refresh after inserting a record.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Retrieve all student records |
| POST | `/api/students` | Create a student record |
| GET | `/api/students/:id` | Retrieve one record |
| PUT | `/api/students/:id` | Update a record |
| DELETE | `/api/students/:id` | Delete a record |

Example JSON for POST:

```json
{
  "studentName": "Ananya Kumar",
  "rollNumber": "24IT001",
  "department": "Information Technology",
  "email": "ananya@example.com",
  "technicalSkills": ["React", "Node.js", "MongoDB"],
  "aptitudeScore": 82,
  "communicationSkills": "Good",
  "placementReadiness": "Ready"
}
```

## Project structure

```text
backend/
  src/config/db.js
  src/controllers/studentController.js
  src/models/StudentSkill.js
  src/routes/studentRoutes.js
  src/server.js
frontend/
  src/components/StudentForm.jsx
  src/pages/Home.jsx
  src/pages/AddStudent.jsx
  src/pages/StudentList.jsx
  src/services/api.js
  src/services/studentService.js
  src/App.jsx
  src/main.jsx
  src/styles.css
ASSIGNMENT_GUIDE.md
REPORT_TEMPLATE.md
SCREENSHOT_CHECKLIST.md
```

## GitHub submission

Create a GitHub repository, upload the project source (do not upload either `.env` file or real credentials), and place your actual repository URL on the assignment front page. See `GITHUB_STEPS.md`.

## Important

This ZIP contains the complete source code and setup/write-up guidance. Your own Atlas credentials, actual student records, GitHub URL and screenshots must be added by you. Do not submit fabricated screenshots or commit secrets.
