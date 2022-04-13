import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="ab">
      <div className="ab_title">About Me</div>
      <div className="about">
        <div className="about_Pic">
          <img src="/images/Mohitabout.png" alt="" />
        </div>
        <div className="about_cv">
          <h1>Hello, I am Mohit Jamle</h1>
          <p>
            I am from indore (M.P), INDIA. currently I am doing my graduction
            from Devi Ahilya Vishwavidyalaya (DAVV) Indore. I have good
            expireance in web-development scince I am working on frontend from
            last 1 year and I also working on ReactJS from last 9 mounths. My
            datastructure and algorithms are also great + I am freelancer. I
            worked with expireance web-developers in my freelencing projects.
          </p>

          <div className="about_intro">
            <div className="about_coloum">
              <strong className="strong">Name</strong>
              <span>: Mohit Jamle</span>
            </div>
            <div className="about_coloum">
              <strong className="strong">Age</strong>
              <span>: 19</span>
            </div>

            <div className="about_coloum">
              <strong className="strong">Phone Number </strong>
              <span>: +91 7987577125</span>
            </div>
            <div className="about_coloum">
              <strong className="strong">Email </strong>
              <span> : mohitjamle111@gmail.com</span>
            </div>
          </div>
          <button className="about_download">Download Cv </button>
        </div>
      </div>
    </div>
  );
};

export default About;
