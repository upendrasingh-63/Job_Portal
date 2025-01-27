import express from 'express';
import connectDB from "./utils/db.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Basic Route
app.get('/', (req, res) => {
    res.send('Hello');
});

// Start Server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port: ${PORT}`);
});
