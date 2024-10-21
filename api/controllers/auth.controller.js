import bcrypt from "bcryptjs"
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to create a user" });
  }
}


export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });
    if (! await bcrypt.compare(password, user.password)) return res.status(401).json({ message: "Invalid Password" });
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "30d",
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }).status(200).json({ message: "Login Successfull" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Login Failed" });
  }
}
export const logout = (req, res) => {
  res.clearCookie('jwt').status(200).json({ message: "Logout Successfull" });
}

