import React from "react";
import "./Home.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";

const Home = () => {
  return (
    <div className="home">
      <div className="home_caption">
        <h2>Welcome!</h2>
        <h1> I Am Mohit Jamle </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          dolore error ducimus illum officia quas dolorem deleniti est suscipit.
          Aspernatur, excepturi?
        </p>

        <div className="home_buttons">
          <a href="https://instagram.com/mohit.j.35111?igshid=YmMyMTA2M2Y=">
            <IconButton className="home_button">
              <InstagramIcon />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100078994080412">
            <IconButton className="home_button">
              <Facebook />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/mohit-jamle-4b33b1227/">
            <IconButton className="home_button">
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://github.com/MohitJamle">
            <IconButton className="home_button">
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>

      <div className="home_image">
        <img
          className="home_imageImg"
          src="/images/with.png"
          alt="Mohit Jamle"
        />
      </div>
    </div>
  );
};

export default Home;
