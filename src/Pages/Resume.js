import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume_box">
        <h4 className="date">2018-2019</h4>
        <h2>My High School</h2>
        <h4>From Bharat sagar public school.</h4>
        <h4>M.P(Indore) INDIA</h4>
      </div>
      <div className="arrow">↓</div>
      <div className="resume_box">
        <h4 className="date">2020-2021</h4>
        <h2>My Higher secondary School</h2>
        <h4>From Bharat sagar public school.</h4>
        <h4>M.P(Indore) INDIA</h4>
      </div>

      <div className="arrow">&#8595;</div>
      <div className="resume_box">
        <h4 className="date">2021-2025</h4>
        <h2>My Graduation</h2>
        <p>Currently I am doing My Graduation</p>
        <h4>From DAVV , indore(M.P)</h4>
      </div>
    </div>
  );
};

export default Resume;
