import React from "react";
import "./Home.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
import { Facebook, LinkedIn } from "@material-ui/icons";

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
          <IconButton className="home_button">
            <InstagramIcon />
          </IconButton>
          <IconButton className="home_button">
            <Facebook />
          </IconButton>
          <IconButton className="home_button">
            <LinkedIn />
          </IconButton>
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
