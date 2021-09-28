import About from "./About";
import Skills from "./Skills";
import "./App.css";
import NavBar from "./NavBar";
import { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  const [selected, setSelected] = useState("home");

  const renderComponent = () => {
    switch (selected) {
      case "home":
        return <Home handleClick={(selected) => setSelected(selected)} />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
    }
  };

  return (
    <div className="App">
      <div className="second-row-container">
        <div>
          <NavBar handleClick={(selected) => setSelected(selected)} />
        </div>
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}

export default App;
