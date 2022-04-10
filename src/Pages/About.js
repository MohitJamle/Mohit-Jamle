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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl
            dolor, id dapibus leo elementum posuere. Ut aliquam metus quis
            laoreet elementum. In hac habitasse platea dictumst. In hac
            habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat
            velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis
            consectetur quam.
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
              <strong className="strong">Address </strong>
              <span>: Nihalpur mundi ,Bijalpur (Indore,(M.P))</span>
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
