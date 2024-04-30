# test_server
This is a simple RESTful API for managing a collection of books. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on books.

# How to Run
npm start: This script will run the server on port 8000.


# Endpoints
GET /books: Retrieve a list of all books.
GET /books/:id: Retrieve details of a specific book by its ID.
POST /books: Add a new book to the collection.
PUT /books/:id: Update details of a specific book by its ID.
DELETE /books/:id: Delete a book from the collection by its ID.


# Dependencies
express: For building the RESTful API.
body-parser: For parsing request bodies.
fs.promises: For file system operations.
nodemon (devDependency): For automatic server restarts during development.