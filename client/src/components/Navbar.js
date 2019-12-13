import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>React-Redux-App</nav>
      <span>
        <Link to='/'>Home</Link>
      </span>
      |
      <span>
        <Link to='About'>About</Link>
      </span>
    </div>
  );
}
