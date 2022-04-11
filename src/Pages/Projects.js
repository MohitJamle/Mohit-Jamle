import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";

const Projects = () => {
  const ProjectsInfo = [
    {
      fade: "left",
      id: "p1",
      image: "/images/Netflix.png",
      title: "Netflix-Clone",
      date: "January 6, 2022",
      link: "https://netflix-clone-84fdf.firebaseapp.com/",
      description:
        "This is my Netflix-clone In this webSite I use TMDB official API for data of movies and React-Youtube to show movies trailer to user and to fetch trailer I use movie-trailer.",
    },
    {
      fade: "top",
      id: "p2",
      image: "/images/Disney.png",
      title: "Disney+ Clone",
      date: "February 18, 2022",
      link: "https://disney-hotstore-clone.firebaseapp.com/",
      description:
        "This is my Disney+ clone Where you have to Authenticate By Google to see my work. In this webSite I use Redux to manage user and movies data a lot's of animations and React-slick like Libraries .",
    },
    {
      fade: "right",
      id: "p3",
      image: "/images/Spotify.jpeg",
      title: "Spotify-Clone",
      date: "November 28, 2021",
      link: "https://m-spotify-clone.vercel.app/",
      description:
        "I use official Spotify Authentication and once if user authenticated user can see his orignal spotify Playlists, even he can play songs.",
    },
    {
      fade: "right",
      id: "p4",
      image: "/images/Golden-view.png",
      title: "Golden-View",
      date: "August 3, 2021",
      link: "https://mohitjamle.github.io/golden-view-the-news-app/",
      description:
        "This is News app named Golden view it shows you best use of grid, bootstrap and React-Router.",
    },
    {
      fade: "",
      id: "p4",
      image: "/images/TextAnalyzer.png",
      title: "Text Analyzer",
      date: "September 26, 2021",
      link: "https://mohitjamle.github.io/Text-Analyxer/",
      description:
        "This is one of hardest webSite for Me at that time because in these webSite I use a lot of javascript functions which I write by my-self after doing DSA cource and you can check it out for more info.",
    },
    {
      fade: "left",
      id: "p4",
      image: "/images/TikTok.png",
      title: "Tik-Tok",
      date: "October 12, 2021",
      link: "https://tik-tok-clone-51e00.firebaseapp.com/",
      description:
        "In this clone I used firebase as a backend and material UI for Icons.",
    },
  ];

  return (
    <div className="projects">
      {ProjectsInfo.map((project) => {
        const fade = project.fade;
        return (
          <>
            {fade === "right" && (
              <Fade right key={project.id}>
                <div className="project">
                  <img src={project.image} alt="" />
                  <div className="project_content">
                    <h2>{project.title}</h2>
                    <small className="project_date">
                      &#xf017; {project.date}
                    </small>
                    <p>{project.description}</p>
                    <a href={project.link}>
                      <button>Go to Web-Site</button>
                    </a>
                  </div>
                </div>
              </Fade>
            )}
            {fade === "left" && (
              <Fade left key={project.id}>
                <div className="project">
                  <img src={project.image} alt="" />
                  <div className="project_content">
                    <h2>{project.title}</h2>
                    <small className="project_date">
                      &#xf017; {project.date}
                    </small>
                    <p>{project.description}</p>
                    <a href={project.link}>
                      <button>Go to Web-Site</button>
                    </a>
                  </div>
                </div>
              </Fade>
            )}
            {fade === "top" && (
              <Fade top key={project.id}>
                <div className="project">
                  <img src={project.image} alt="" />
                  <div className="project_content">
                    <h2>{project.title}</h2>
                    <small className="project_date">
                      &#xf017; {project.date}
                    </small>
                    <p>{project.description}</p>
                    <a href={project.link}>
                      <button>Go to Web-Site</button>
                    </a>
                  </div>
                </div>
              </Fade>
            )}
            {fade === "bottom" && (
              <Fade bottom key={project.id}>
                <div className="project">
                  <img src={project.image} alt="" />
                  <div className="project_content">
                    <h2>{project.title}</h2>
                    <small className="project_date">
                      &#xf017; {project.date}
                    </small>
                    <p>{project.description}</p>
                    <a href={project.link}>
                      <button>Go to Web-Site</button>
                    </a>
                  </div>
                </div>
              </Fade>
            )}
            {fade === "" && (
              <Zoom key={project.id}>
                <div className="project">
                  <img src={project.image} alt="" />
                  <div className="project_content">
                    <h2>{project.title}</h2>
                    <small className="project_date">
                      &#xf017; {project.date}
                    </small>
                    <p>{project.description}</p>
                    <a href={project.link}>
                      <button>Go to Web-Site</button>
                    </a>
                  </div>
                </div>
              </Zoom>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Projects;

// <Fade right>
// <div className="project">
//   <img src="/images/Spotify.jpeg" alt="" />
//   <div className="project_content">
//     <h2>Spotify-Clone</h2>
//     <small className="project_date">&#xf017; May 31, 2021</small>
//     <p>
//       Description About website what you make how you make what tools
//       should use and when you make it.
//     </p>
//     <a href="/">
//       <button>Go to Web-Site</button>
//     </a>
//   </div>
// </div>
// </Fade>
// <Zoom>
// <div className="project">
//   <img src="/images/Disney.png" alt="" />
//   <div className="project_content">
//     <h2>Disney+ Clone</h2>
//     <small className="project_date">&#xf017; May 31, 2021</small>
//     <p>
//       Description About website what you make how you make what tools
//       should use and when you make it.
//     </p>
//     <a href="/">
//       <button>Go to Web-Site</button>
//     </a>
//   </div>
// </div>
// </Zoom>
// <Fade left>
// <div className="project">
//   <img src="/images/Disney.png" alt="" />
//   <div className="project_content">
//     <h2>Disney+ Clone</h2>
//     <small className="project_date">&#xf017; May 31, 2021</small>
//     <p>
//       Description About website what you make how you make what tools
//       should use and when you make it.
//     </p>
//     <a href="/">
//       <button>Go to Web-Site</button>
//     </a>
//   </div>
// </div>
// </Fade>
