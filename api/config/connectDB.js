import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;
const connectDB = async (req, res) => {
  try {
    const connect = await mongoose.connect(DB_URL);
    if (!connect) return console.log('Database connection failed');
    console.log('Database Connection Successful');
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;