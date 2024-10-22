import express from "express";
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { verifyToken } from "./middlewares/verifyToken.js";

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
connectDB();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use(cookieParser());
app.get("/", verifyToken, (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You are authorized" });
})
app.listen(8080, () => {
  console.log('Server is running');
})