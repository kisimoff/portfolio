import React, { useState, useRef } from "react";
import { Document } from "react-pdf";

import "./App.css";
import ToggleButton from "./components/ToggleButton";
import Terminal from "./components/Terminal";
import About from "./components/About";

import TrIcon from "./components/TrIcon";
import AbIcon from "./components/AbIcon";

import PlayListProvider2 from "./components/Player";
import Player23 from "./components/Player2";
import github_light from "./socials/github-light.png";
import logoRotate from "./img/logoRotate.png";
import Draggable from "react-draggable";

import github_dark from "./socials/github-dark.png";
import linkedin_light from "./socials/linkedin-light.png";
import linkedin_dark from "./socials/linkedin-dark.png";
import download_light from "./socials/download-light.png";
import download_dark from "./socials/download-dark.png";
import background_dark from "./background/dark.jpg";
import background_light from "./background/light.jpg";
import resumePdf from "./files/valentin-kisimov-resume.pdf";
const App = () => {
  const [theme, setTheme] = useState(true);
  const [active, setActive] = useState(true);
  const onPress = () => {
    console.log("Hi");
    setTheme(!theme);
  };

  const themeVars =
    theme === true
      ? {
          app: {
            // backgroundImage: `url(${background_dark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            transition: "all 1s ease",
          },
          window: {
            backgroundColor: "#141732",
            color: "#F4F4F4",
            transition: "all 1s ease",
          },
          field: {
            backgroundColor: "#222333",
            color: "#F4F4F4",
            fontWeight: "normal",
            // transition: "all 1s ease",
            boxShadow: "0 2px 5px #111",
          },
          cursor: { animation: "1.02s blink-dark step-end infinite" },
        }
      : {
          app: {
            backgroundImage: `url(${background_light})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            transition: "all 1s ease",
          },
          window: {
            backgroundColor: "#5F5C6D",
            color: "#E3E3E3",
            transition: "all 1.5s ease",
          },
          field: {
            backgroundColor: "#E3E3E3",
            color: "#474554",
            fontWeight: "normal",
            // transition: "all 1.5s ease",
            boxShadow: "0 2px 5px #33333375",
          },
          cursor: { animation: "1.02s blink-light step-end infinite" },
        };

  return (
    <div id="app" className="app" style={themeVars.app}>
      <div className="navbar">
        <div
          className="nav-heading"
          id="test"
          style={
            theme
              ? { color: "white", transition: "all 1.5s ease" }
              : { color: "black", transition: "all 1.5s ease" }
          }
        >
          <p>
            Kisim
            <ToggleButton onChange={onPress} />
            {theme ? "ff" : "n"}
            &nbsp;OS
          </p>
        </div>

        <div className="nav-socials">
          <a
            className="nav-download-button"
            href={resumePdf}
            download="valentin-kisimov-resume.pdf"
          >
            <span
              className="nav-download-button-text"
              style={theme ? { color: "white" } : { color: "black" }}
            >
              <img
                style={{ marginRight: "10px", marginBottom: "10px" }}
                alt="download"
                src={theme ? download_light : download_dark}
                id="download"
              />
              resume.pdf
            </span>
          </a>

          <a href="https://github.com/vtwenty3">
            <img
              alt="github"
              src={theme ? github_light : github_dark}
              id="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/valentin-kisimov-2719b41a1/">
            <img
              alt="linkedin"
              src={theme ? linkedin_light : linkedin_dark}
              id="linkedin"
            />
          </a>
        </div>
      </div>
      <div className="coinWrapper">
        <div className="coin copper"></div>
      </div>
      <div className="icons">
        <TrIcon />
        <AbIcon />
      </div>
      <div className="windowArea">
        <div>
          <Terminal theme={themeVars} setTheme={setTheme} />
          <About theme={themeVars} setTheme={setTheme}></About>
        </div>
      </div>
      <div>
        {/* <PlayListProvider2 /> */}
        {/* <Player23 /> */}
      </div>
    </div>
  );
};

export default App;
