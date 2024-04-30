import express from 'express';
import Book from "../models/Book.js";
import { addNewBook, deleteBookById, getAllBooks, getBookById, updateBookById } from '../controller/book-controller.js';

const router = express.Router();

// GET all books
router.get('/', getAllBooks);

// GET a specific book
router.get('/:id', getBook, getBookById);

// POST a new book
router.post('/', addNewBook);

// PUT update a book
router.put('/:id', getBook, updateBookById);

// DELETE a book
router.delete('/:id', getBook, deleteBookById);

async function getBook(req, res, next) {
    let book;
    try {
        book = await Book.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.book = book;
    next();
}

export default router;
