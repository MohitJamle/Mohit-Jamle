import React from "react";
import About from "../Pages/About";
// import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import "./Body.css";

const Body = ({ onClick }) => {
  const hide = window.innerWidth;

  return (
    <div className="body" onClick={hide >= 1513 ? () => {} : onClick}>
      <Home />
      <About />
      <Resume />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Body;
