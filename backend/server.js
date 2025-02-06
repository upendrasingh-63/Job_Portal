import express from 'express';
import connectDB from "./utils/db.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userroute from './routes/user.route.js';
import jobroute from './routes/job.route.js';
import companyroute from './routes/company.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));



app.use('/api/user', userroute);
app.use('/api/job', jobroute);
app.use("/api/company", companyroute);

// Basic Route
app.get('/', (req, res) => {
    console.log("hello")
    res.send('Hello');
});

// Start Server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port: ${PORT}`);
});
