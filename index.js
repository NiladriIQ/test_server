import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import bookRoute from './routes/book.js';
import orderRoute from './routes/orders.js';
import errorHandler from './middleware/errorHandler.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// MongoDB Connection
Connection(username, password);

// Middleware
app.use(errorHandler);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/books', bookRoute);
app.use('/order', orderRoute);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
