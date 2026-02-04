# Complaint / Issue Tracker API

This project is a simple backend REST API built using **Node.js** and **Express.js** to manage complaints or issues.  
It is designed to demonstrate clean backend architecture, proper use of Express routing, middleware, and controllers, without using any database.

All data is stored **in-memory using JavaScript arrays**, making this project ideal for learning and academic assignments.

---

## 🚀 Features

- Create and view complaints
- Resolve existing complaints
- Delete complaints
- Clean separation of routes, controllers, and middleware
- No database used (in-memory storage)
- Uses ES Modules (`import / export`)
- Demonstrates public and protected routes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)

---

## 📁 Project Structure

complaint-api/
│── server.js
│── app.js
│── package.json
│
├── routes/
│ └── complaint.routes.js
│
├── controllers/
│ └── complaint.controller.js
│
├── middleware/
│ ├── logger.middleware.js
│ └── auth.middleware.js


---

## 📌 API Endpoints

### Public Routes
- **GET** `/complaints` → Fetch all complaints
- **POST** `/complaints` → Create a new complaint

### Protected Routes
- **PUT** `/complaints/:id/resolve` → Resolve a complaint
- **DELETE** `/complaints/:id` → Delete a complaint

> Protected routes use an authentication middleware to demonstrate route-level protection.

---

## 📦 Complaint Object Structure

```json
{
  "id": 1,
  "title": "Complaint title",
  "description": "Complaint description",
  "status": "open"
}
```


## 🔐 Middleware Used
Logger Middleware (App-level)
Logs HTTP method and URL for every request.

Auth Middleware (Route-level)
Protects resolve and delete routes and logs authentication checks.

## ▶️ How to Run the Project
Clone the repository

git clone <your-repo-url>
Navigate to the project directory

cd complaint-api
Install dependencies

npm install
Start the server

npm start
Server will run on:

http://localhost:3000

##  Learning Outcomes
Understanding Express routing and middleware execution order

Separating business logic using controllers

Implementing protected and public routes

Building a clean and scalable backend structure

## 📌 Note
This project does not use any database. All data is lost when the server restarts.

👩‍💻 Author
Prachi Dhiman
