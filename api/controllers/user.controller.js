import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get users" });
  }
}
export const getUser = async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get user" });
  }
}


export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  const { username, email, password } = req.body;
  try {
    const updateData = { username, email };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Updated Successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update user", error: error.message });
  }
};



export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete user" });
  }
}
