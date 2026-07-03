# AI Twin Backend – Basic Information Module

## Overview

The **Basic Information Module** is the first backend service of the AI Twin platform. It provides REST APIs for storing, retrieving, updating, and managing a user's personal profile information.

The backend is built with **Node.js**, and **PostgreSQL**, and is designed to integrate seamlessly with the AI Twin frontend.

---

## Features

- Create user basic profile
- Retrieve user information
- Update existing profile
- Delete user profile
- PostgreSQL database integration
- Environment variable configuration
- RESTful API architecture
- Error handling and validation
- Modular project structure

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| PostgreSQL | Database |
| pg | PostgreSQL Client |
| dotenv | Environment Variables |
| cors | Cross-Origin Requests |
| nodemon | Development Server |

---

## Project Structure

```
Ai_Twin_Backend_Basicinfo/
│
├── src/
│   ├── config/
│   │    └── db.js
│   │
│   ├── controllers/
│   │
│   ├── routes/
│   │
│   ├── models/
│   │
│   ├── middleware/
│   │
│   ├── services/
│   │
│   └── app.js
│
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/srivaninagunuri/Ai_Twin_Backend_Basicinfo.git
```

Move into the project

```bash
cd Ai_Twin_Backend_Basicinfo
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_password
DB_PORT=5432
```

> **Note:** Never commit the `.env` file to GitHub.

---

## Running the Application

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/basicinfo | Create user profile |
| GET | /api/basicinfo | Get all users |
| GET | /api/basicinfo/:id | Get user by ID |
| PUT | /api/basicinfo/:id | Update user |
| DELETE | /api/basicinfo/:id | Delete user |

---

## Database

The application uses **PostgreSQL** as the primary database.

Typical user information stored includes:

- First Name
- Last Name
- Email
- Phone Number
- Gender
- Date of Birth
- Address
- City
- State
- Country
- Postal Code

---

## Error Handling

The application returns standard HTTP status codes.

| Status Code | Meaning |
|-------------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

## Future Enhancements

- JWT Authentication
- Input Validation
- File Uploads
- Swagger API Documentation
- Docker Support
- Unit Testing
- Logging
- CI/CD Pipeline

---

## Author

**Srivani Nagunuri**

Data Science & Backend Developer

GitHub:
https://github.com/srivaninagunuri

---

## License

This project is intended for educational and development purposes.
