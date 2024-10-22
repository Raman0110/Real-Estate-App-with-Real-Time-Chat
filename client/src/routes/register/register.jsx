import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", { username, email, password });
      toast.success("User Registration Successful", {
        position: "top-center",
        autoClose: 2000,
        closeButton: false
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000)
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 2000,
        closeButton: false
      });
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit" disabled={isLoading}>Register</button>
          <Link to="/login">Do you have an account?</Link>
          <ToastContainer />
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
}

export default Register;
