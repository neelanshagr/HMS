// Import necessary modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
// import userRouter from './routes/userRouter.js'
import { dbConnection } from './db/dbConnection.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
)

// Routes
// app.use('/api/v1/user', userRouter); // Mount userRouter at '/api/v1/user'

dbConnection();

export default app;
