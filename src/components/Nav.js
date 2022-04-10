import React from "react";
import "./Nav.css";

const Nav = ({ show }) => {
  return (
    <nav className="nav" style={{ display: show ? "inline" : "none" }}>
      <h3>MOHIT</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
