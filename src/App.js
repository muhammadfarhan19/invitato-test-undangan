import { useState, useEffect, useRef } from "react";
import "./App.css";
import "animate.css";

import { Hero } from "./components/hero/Hero";
import { Cover } from "./components/cover/Cover";
import { Welcome } from "./components/welcome/Welcome";

function App() {
  const [click, setClick] = useState(true);
  const audio = useRef(null);

  const handleClick = () => {
    setClick(false);
    if (audio.current) audio.current.play();
  };

  return (
    <div className="app">
      <Hero />
      {click ? (
        <Cover
          handleClick={handleClick}
          className="animate__animated animate__fadeoutUp"
        />
      ) : (
        <Welcome className="animate__animated animamte__fadeIn" />
      )}
      <audio ref={audio}>
        <source src="./assets/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
