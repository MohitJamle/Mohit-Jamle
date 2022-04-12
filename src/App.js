import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Nav from "./components/Nav";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Route, Routes } from "react-router-dom";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 1512) {
      setShow(false);
    }
  }, []);

  const click = () => {
    if (window.innerWidth <= 1512) {
      setShow(false);
    }
  };

  return (
    <div className="app">
      {show && <Nav show={show} click={click} />}

      <div
        className="app_menu"
        onClick={() => setShow(!show)}
        style={{
          left: show && "200px",
        }}
      >
        {show ? <CloseIcon /> : <MenuIcon className="app_menuIcon" />}
      </div>

      <Routes>
        <Route path="/" element={<Body onClick={() => setShow(false)} />} />
        <Route path="/*" element={<Body onClick={() => setShow(false)} />} />
      </Routes>
    </div>
  );
}

export default App;

// React Revel
// React Spring
