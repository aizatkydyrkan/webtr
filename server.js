const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection String
const mongoURI = "mongodb+srv://aizat:aizat_2007@cluster0.wu4ozc3.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas successfully'))
    .catch(err => console.error('Connection error:', err));

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true }, // Changed from price to year
    category: { type: String, default: 'General' }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

//API ENDPOINTS 

app.get('/', (req, res) => {
    res.send('Bookstore API is running. Go to /books to see the data.');
});

// CREATE 
app.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ message: "Validation Error", error: err.message });
    }
});

// READ all 
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 }); // Newest first
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ 
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID format" });
    }
});

// UPDATE 
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE 
app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));