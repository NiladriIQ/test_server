import Book from "../models/Book.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getBookById = (req, res) => {
    res.json(res.book);
}

export const addNewBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const updateBookById = async (req, res) => {
    if (req.body.title != null) {
        res.book.title = req.body.title;
    }
    if (req.body.author != null) {
        res.book.author = req.body.author;
    }
    if (req.body.publishedYear != null) {
        res.book.publishedYear = req.body.publishedYear;
    }
    try {
        const updatedBook = await res.book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const deleteBookById = async (req, res) => {
    try {
        await res.book.remove();
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}