import React, { useState, useRef, useEffect } from "react";
import { Document } from "react-pdf";
import { GiTechnoHeart } from "react-icons/gi";

import "./App.css";
import ToggleButton from "./components/ToggleButton";
import Terminal from "./components/windows/Terminal";
import Terminal2 from "./components/windows/Terminal2";
import { TerminalContextProvider } from "react-terminal";

import { BsLinkedin, BsPersonCircle } from "react-icons/bs";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

import { VscFilePdf } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

import { BsJournalCode } from "react-icons/bs";
import { GiHourglass } from "react-icons/gi";
import { BsVinyl } from "react-icons/bs";
import { BsTerminal } from "react-icons/bs";
import About from "./components/windows/About";
import Start from "./components/windows/Start";

import DeviceInfo from "./components/windows/DeviceInfo";
import Projects from "./components/windows/Projects";
import Player from "./components/windows/Player";
import logo_white from "./img/logo_white.png";
import logo_black from "./img/logo_black.png";
import circuit from "./background/circuit.mp4";
import abstract from "./background/abstract.mp4";
import board from "./background/board.mp4";
import board2 from "./background/board2.mp4";
import electronic from "./background/electronic.mp4";
import electronic2 from "./background/electronic2.mp4";
import electronic3 from "./background/electronic3.mp4";
import IconTask from "./components/IconTask";
import network from "./background/network.mp4";

import Icon from "./components/Icon";
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
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
const App = () => {
  const [theme, setTheme] = useState(true);
  const [terminal, setTerminal] = useState(false);
  const [about, setAbout] = useState(false);
  const [start, setStart] = useState(true);
  const [zIndexxx, setZindexxx] = useState(6);
  const [terminal2, setTerminal2] = useState(false);

  const [device, setDevice] = useState(false);
  const [projects, setProjects] = useState(false);

  const [active, setActive] = useState(true);
  const onPress = () => {
    console.log("Hi");
    setTheme(!theme);
  };

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
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
            transition: "all 0.4s ease",
          },
          window: {
            // backgroundColor: "#2424248e",
            // backgroundColor: "#360133b5",
            // backgroundColor: "#52004e75",

            // backgroundColor: "#65032dc3",

            // backgroundColor: "#4a0147a7",
            // backgroundColor: "#77014ea0",
            // backgroundColor: "#77014ea0",
            backgroundColor: "#cfcfcf46",

            backdropFilter: "blur(23px)",
            color: "white",
            //color: "black",
            // transition: "all 1s ease",
          },
          field: {
            // backgroundColor: "#1f1b26fa",
            // backdropFilter: "blur(3px)",
            color: "#F4F4F4",
            fontWeight: "normal",
            backgroundColor: "#0f0e0ff3",
            borderBottom: "1px solid #cfcfcf46",
            borderLeft: "1px solid #cfcfcf46",
            borderRight: "1px solid #cfcfcf46",
            boxSizing: "border-box",
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
            // transition: "all 1.5s ease",
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
      <video
        className="video-background"
        playsinline
        loop
        muted
        autoPlay
        src={electronic3}
        ref={videoEl}
        type="video/mp4"
      />
      {/* abstract board network circuit */}

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
          <img id="logo" alt="logo" src={theme ? logo_white : logo_black} />

          <p>
            Kisim
            <ToggleButton onChange={onPress} />
            {theme ? "ff" : "n"}
            &nbsp;OS
          </p>
        </div>
        <div className="nav-icon-task">
          {terminal ? (
            <IconTask
              icon={BsTerminal}
              caption="Terminal"
              elementId="terminal"
              selfId="task-terminal-icon"
              setVisibility={setTerminal}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
          {about ? (
            <IconTask
              icon={BsPersonCircle}
              caption="About"
              elementId="about"
              selfId="task-about-icon"
              setVisibility={setAbout}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
          {device ? (
            <IconTask
              icon={TbDeviceDesktopAnalytics}
              caption="Device"
              line2="Info"
              elementId="deviceInfo"
              selfId="task-deviceInfo-icon"
              setVisibility={setDevice}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}

          {projects ? (
            <IconTask
              icon={BsJournalCode}
              caption="Projects"
              elementId="projects"
              selfId="task-projects-icon"
              setVisibility={setProjects}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
        </div>
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/valentin-kisimov-2719b41a1/">
            <SlSocialLinkedin className="nav-social-svg" />
            {/* <img
              alt="linkedin"
              src={theme ? linkedin_light : linkedin_dark}
              id="linkedin"
            /> */}
          </a>
          <a href="https://github.com/vtwenty3">
            <VscGithubAlt className="nav-social-svg" />
            {/* <img
              alt="github"
              src={theme ? github_light : github_dark}
              id="github"
            /> */}
          </a>
        </div>
      </div>

      {/* <div className="coinWrapper">
        <div className="coin copper"></div>
      </div> */}
      <div className="icons">
        <Icon
          icon={BsTerminal}
          caption="Terminal"
          elementId="terminal"
          setVisibility={setTerminal}
          zIndexxx={zIndexxx}
          visibility={terminal}
          setZindexxx={setZindexxx}
        />

        <Icon
          icon={BsTerminal}
          caption="Terminal2"
          elementId="terminal2"
          setVisibility={setTerminal2}
          zIndexxx={zIndexxx}
          visibility={terminal2}
          setZindexxx={setZindexxx}
        />

        {/* <Icon icon={BsTerminal} caption="Terminal" elementId="terminal" /> */}

        <Icon
          icon={BsPersonCircle}
          caption="About"
          elementId="about"
          setVisibility={setAbout}
          visibility={about}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
        />
        <Icon
          icon={TbDeviceDesktopAnalytics}
          caption="Device"
          elementId="deviceInfo"
          setVisibility={setDevice}
          zIndexxx={zIndexxx}
          visibility={device}
          setZindexxx={setZindexxx}
        />
        <Icon
          icon={BsJournalCode}
          caption="Projects"
          elementId="projects"
          setVisibility={setProjects}
          zIndexxx={zIndexxx}
          visibility={projects}
          setZindexxx={setZindexxx}
        />
        <div className="hoverIcon">
          <a
            className="iconWrapper"
            href={resumePdf}
            download="valentin-kisimov-resume.pdf"
          >
            {" "}
            <VscFilePdf className="icon" />
            <span
              className="caption"
              style={theme ? { color: "white" } : { color: "black" }}
            >
              {/* <img
                style={{ marginRight: "10px", marginBottom: "10px" }}
                alt="download"
                src={theme ? download_light : download_dark}
                id="download"
              /> */}
              Resume
            </span>
          </a>
        </div>

        {/* <Icon icon={GiHourglass} caption="Start" elementId="start" /> */}

        {/* <Icon
          icon={BsVinyl}
          caption="Music"
          line2="Player"
          elementId="player"
        /> */}
        {/* <Icon icon={VscFilePdf} caption="Pdf" line2="Viewer" elementId="pdf" /> */}
      </div>
      {terminal ? (
        <Terminal
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setTerminal}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
          elementId="terminal"
        />
      ) : null}
      {terminal2 ? (
        <TerminalContextProvider>
          <Terminal2
            theme={themeVars}
            setTheme={setTheme}
            setVisibility={setTerminal2}
            zIndexxx={zIndexxx}
            setZindexxx={setZindexxx}
            elementId="terminal2"
          />
        </TerminalContextProvider>
      ) : null}
      {about ? (
        <About
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setAbout}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
        />
      ) : null}
      {projects ? (
        <Projects
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setProjects}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
        />
      ) : null}
      {device ? (
        <DeviceInfo
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setDevice}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
        />
      ) : null}

      {start ? (
        <Start theme={themeVars} setTheme={setTheme} setVisibility={setStart} />
      ) : null}
      {/* <Player theme={themeVars} setTheme={setTheme}></Player> */}
    </div>
  );
};

export default App;
