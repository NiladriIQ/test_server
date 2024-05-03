# Book API Documentation
This is a simple RESTful API for managing a collection of books. It provides endpoints for performing CRUD operations (Create, Read, Update, Delete) on books.

# How to Run
npm start: This script will run the server on port 8000.

# Dependencies
express: For building the RESTful API.
body-parser: For parsing request bodies.
fs.promises: For file system operations.
nodemon (devDependency): For automatic server restarts during development.

## Base URL
The base URL for accessing the API is http://localhost:3000.

## Endpoints
GET /books: Retrieve a list of all books.
GET /books/:id: Retrieve details of a specific book by its ID.
POST /books: Add a new book to the collection.
PUT /books/:id: Update details of a specific book by its ID.
DELETE /books/:id: Delete a book from the collection by its ID.

### 1. Get All Books
URL: /books
Method: GET
Description: Retrieve a list of all books.
Response: An array of book objects, each containing the following properties:
    id (string): Unique identifier of the book.
    title (string): Title of the book.
    author (string): Author of the book.
    publishedYear (number): Year the book was published.

### Example Request:
GET /books

### Example Response:
[
  {
    "id": "1",
    "title": "Book 1",
    "author": "Author 1",
    "publishedYear": 2020
  },
  {
    "id": "2",
    "title": "Book 2",
    "author": "Author 2",
    "publishedYear": 2019
  }
]
## 2. Get Book by ID
URL: /books/:id
Method: GET
Description: Retrieve details of a specific book by its ID.
Parameters:
    id (string): Unique identifier of the book.
    Response: A single book object with the following properties:
    id (string): Unique identifier of the book.
    title (string): Title of the book.
    author (string): Author of the book.
    publishedYear (number): Year the book was published.

### Example Request:
GET /books/1

### Example Response:
{
  "id": "1",
  "title": "Book 1",
  "author": "Author 1",
  "publishedYear": 2020
}
## 3. Add Book
URL: /books
Method: POST
Description: Add a new book to the collection.
Request Body: A JSON object containing the following properties:
    title (string): Title of the book.
    author (string): Author of the book.
    publishedYear (number): Year the book was published.
    Response: The newly added book object with the following properties:
    id (string): Unique identifier of the book.

### Example Request
POST /books
Content-Type: application/json

{
  "title": "New Book",
  "author": "New Author",
  "publishedYear": 2022
}
### Example Response
{
  "id": "3",
  "title": "New Book",
  "author": "New Author",
  "publishedYear": 2022
}
## 4. Update Book
URL: /books/:id
Method: PUT
Description: Update details of a specific book by its ID.
Parameters:
    id (string): Unique identifier of the book.
Request Body: A JSON object containing one or more of the following properties to update:
    title (string): Title of the book.
    author (string): Author of the book.
    publishedYear (number): Year the book was published.
Response: The updated book object with the following properties:
    id (string): Unique identifier of the book.
    title (string): Title of the book.
    author (string): Author of the book.
    publishedYear (number): Year the book was published.

### Example Request:
PUT /books/1
Content-Type: application/json

{
  "author": "Updated Author"
}

### Example Response:
{
  "id": "1",
  "title": "Book 1",
  "author": "Updated Author",
  "publishedYear": 2020
}
## 5. Delete Book
URL: /books/:id
Method: DELETE
Description: Delete a book from the collection by its ID.
Parameters:
    id (string): Unique identifier of the book.
Response: A success message indicating that the book was deleted.

### Example Request:
DELETE /books/1

### Example Response:
{
  "message": "Book deleted"
}

## Error Handling
The API handles various error scenarios and returns appropriate HTTP status codes along with error messages in the response body. Examples of error scenarios include invalid requests, non-existent book IDs, and server errors.