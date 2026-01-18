# Web Technologies Backend

## Aizat Kydyrkan,SE-2432,Assignment3

### 1. Project Overview
Topic: Book Management System (Bookstore) Goal: Transitioning from a local JSON storage to a cloud-based MongoDB Atlas database. I have developed a full CRUD (Create, Read, Update, Delete) API to manage a library of books, including a simple frontend interface.

**Tech Stack:**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Cloud)
- **ODM**: Mongoose
- **Frontend**: HTML5, CSS3, Vanilla JavaScript

### 2. Database Schema Design
I used **Mongoose** to define a structured schema for the "Book" object. This ensures data integrity and validation.

**Book Object Fields:**

- *title (String):* The name of the book (Required).
- *author (String):* The author's name (Required).
- *year (Number):* The publication year (Required).

### 3. API Documentation
The server handles the following RESTful routes:

| Method | Endpoint      | Description                     | Status Code   |
|--------|---------------|---------------------------------|---------------|
| POST   | /books        | Create a new book entry         | 201 Created   |
| GET    | /books        | Retrieve all books from Atlas   | 200 OK        |
| GET    | /books/:id    | Retrieve a specific book by ID  | 200 OK        |
| PUT    | /books/:id    | Update book details by ID       | 200 OK        |
| DELETE | /books/:id    | Remove a book from the database | 200 OK        |

<img width="636" height="409" alt="Снимок экрана 2026-01-18 в 16 32 31" src="https://github.com/user-attachments/assets/c2e7034d-635d-4e82-96de-9586d85ab373" />
