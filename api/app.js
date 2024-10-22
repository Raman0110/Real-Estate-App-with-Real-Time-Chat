import express from "express";
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
connectDB();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use(cookieParser());
app.listen(8080, () => {
  console.log('Server is running');
})