import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to='/'>
          <h2>RmnEstate</h2>
        </Link>
        <a href="">
          Home
        </a>
        <a href="">
          About
        </a>
        <a href="">
          Contact
        </a>
        <a href="">
          Agents
        </a>
      </div>
      <div className="right">
        {user ?
          (<div className="user">
            <img src="/user.png" alt="" />
            <span>Raman</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>) :
          (
            <>
              <a href="">Sign in</a>
              <a href="" className="register">Sign up</a>
            </>
          )}
        <div className="menuIcon">
          <img src="/menu.png" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;