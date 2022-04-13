import "./Nav.css";

const Nav = ({ show, click }) => {
  const Home = () => {
    document.getElementById("view").scrollTo({ top: 0, behavior: "smooth" });
    click();
  };
  const About = () => {
    document.getElementById("view").scrollTo({ top: 790, behavior: "smooth" });
    click();
  };
  const Resume = () => {
    if (window.innerWidth > 940) {
      document
        .getElementById("view")
        .scrollTo({ top: 1600, behavior: "smooth" });
    } else if (window.innerWidth > 485) {
      document
        .getElementById("view")
        .scrollTo({ top: 1900, behavior: "smooth" });
    } else if (window.innerWidth > 380) {
      document
        .getElementById("view")
        .scrollTo({ top: 1980, behavior: "smooth" });
    } else {
      document
        .getElementById("view")
        .scrollTo({ top: 2000, behavior: "smooth" });
    }
    click();
  };
  const Project = () => {
    if (window.innerWidth > 1000) {
      document
        .getElementById("view")
        .scrollTo({ top: 2580, behavior: "smooth" });
    } else if (window.innerWidth > 940) {
      document
        .getElementById("view")
        .scrollTo({ top: 2600, behavior: "smooth" });
    } else if (window.innerWidth > 698) {
      document
        .getElementById("view")
        .scrollTo({ top: 2770, behavior: "smooth" });
    } else if (window.innerWidth > 485) {
      document
        .getElementById("view")
        .scrollTo({ top: 2870, behavior: "smooth" });
    } else if (window.innerWidth > 380) {
      document
        .getElementById("view")
        .scrollTo({ top: 3000, behavior: "smooth" });
    } else {
      document
        .getElementById("view")
        .scrollTo({ top: 3100, behavior: "smooth" });
    }
    click();
  };
  const Contact = () => {
    if (window.innerWidth > 670) {
      document
        .getElementById("view")
        .scrollTo({ top: 8200, behavior: "smooth" });
    } else if (window.innerWidth > 600) {
      document
        .getElementById("view")
        .scrollTo({ top: 6050, behavior: "smooth" });
    } else if (window.innerWidth > 500) {
      document
        .getElementById("view")
        .scrollTo({ top: 8250, behavior: "smooth" });
    } else if (window.innerWidth > 475) {
      document
        .getElementById("view")
        .scrollTo({ top: 8350, behavior: "smooth" });
    } else if (window.innerWidth > 414) {
      document
        .getElementById("view")
        .scrollTo({ top: 8450, behavior: "smooth" });
    } else if (window.innerWidth > 379) {
      document
        .getElementById("view")
        .scrollTo({ top: 8500, behavior: "smooth" });
    } else if (window.innerWidth > 360) {
      document
        .getElementById("view")
        .scrollTo({ top: 8610, behavior: "smooth" });
    } else {
      document
        .getElementById("view")
        .scrollTo({ top: 8670, behavior: "smooth" });
    }
    click();
  };

  return (
    <nav className="nav" style={{ display: show ? "inline" : "none" }}>
      <h3>MOHIT</h3>
      <ul>
        <li onClick={Home}>Home</li>
        <li onClick={About}>About</li>
        <li onClick={Resume}>Resume</li>
        <li onClick={Project}>Projects</li>
        <li onClick={Contact}>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
