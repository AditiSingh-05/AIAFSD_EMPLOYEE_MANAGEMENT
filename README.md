# Employee Management Backend

This repository implements a Node.js + Express + MongoDB backend to manage employee records.

Features
- Create, read, update, delete employees
- Search employees by name or department
- Validation and unique email enforcement

Getting started
1. Install dependencies:

```bash
npm install
```

2. Configure environment:
- Copy or edit the `.env` file at the project root. Example values:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/employee-db
NODE_ENV=development
```

3. Start the server:

```bash
node server.js
```

API Endpoints
- POST /employees
  - Create an employee. Required fields: `fullName`, `email`, `phoneNumber`, `department`, `designation`, `salary`, `dateOfJoining`, `employmentType`.
- GET /employees
  - Get all employees.
- GET /employees/:id
  - Get employee by MongoDB `_id`.
- PUT /employees/:id
  - Update employee.
- DELETE /employees/:id
  - Delete employee.
- GET /employees/search?name=xyz&department=HR
  - Search by partial `name` (case-insensitive) and/or exact `department`.

Data model
- `employeeId` (auto-generated string)
- `fullName` (string, required)
- `email` (string, required, unique)
- `phoneNumber` (string, required)
- `department` (enum, required)
- `designation` (string, required)
- `salary` (number, required, positive)
- `dateOfJoining` (date, required)
- `employmentType` (enum: Full-time/Part-time/Contract)
- `status` (Active/Inactive, default Active)

Notes
- The app exposes routes at `/employees` as requested.
- Validation errors return `400`; not found returns `404`; successful creations return `201`.
