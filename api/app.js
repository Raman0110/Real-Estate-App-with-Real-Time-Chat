import express from "express";
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { verifyToken } from "./middlewares/verifyToken.js";
import userRoute from "./routes/user.route.js"

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
connectDB();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "You are authorized", userId: req.userId });
})
app.listen(8080, () => {
  console.log('Server is running');
})