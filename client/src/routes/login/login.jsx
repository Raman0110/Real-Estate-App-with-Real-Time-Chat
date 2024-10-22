import axios from "axios";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", { username, password }, { withCredentials: true });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        autoClose: 2000,
        closeButton: false,
        position: "top-center"
      })
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" required />
          <input name="password" type="password" placeholder="Password" required />
          <button disabled={isLoading}>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
          <ToastContainer />
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
