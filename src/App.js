import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Events from "./components/events/Events";
import Timeline from "./components/timeline/Timeline";
import Team from "./components/team/Team";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left:" + e.clientX + "px;top:" + e.clientY + "px;";
    });
  });
  return (
    <div className="main_body">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/timeline" element={<Timeline />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
}

export default App;
