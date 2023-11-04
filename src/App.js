import { useState, useEffect, useRef } from "react";
import "./App.css";
import "animate.css";

import { Hero } from "./components/hero/Hero";
import { Cover } from "./components/cover/Cover";
import { Welcome } from "./components/welcome/Welcome";
import music from "./assets/music.mp3"

function App() {
  const [click, setClick] = useState(true);

  const audio = new Audio(music)

  const handleClick = () => {
    setClick(false);
    audio.play();
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
    </div>
  );
}

export default App;
