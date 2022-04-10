import React from "react";
import About from "../Pages/About";
import Home from "../Pages/Home";
import "./Body.css";

const Body = ({ onClick }) => {
  const hide = window.innerWidth;

  return (
    <div className="body" onClick={hide >= 1513 ? () => {} : onClick}>
      <Home />
      <About />
    </div>
  );
};

export default Body;
