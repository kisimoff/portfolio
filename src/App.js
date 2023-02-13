import React, { useState, useRef, useEffect } from "react";

import "./App.css";
import ToggleButton from "./components/ToggleButton";
import Terminal from "./components/windows/Terminal";
import Terminal2 from "./components/windows/Terminal2";
import { SpinnerCircular } from "spinners-react";

import { TerminalContextProvider } from "react-terminal";
import {
  useWindupString,
  WindupChildren,
  Pause,
  Linebreaker,
  Pace,
} from "windups";
import { BsLinkedin, BsPersonCircle } from "react-icons/bs";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import {
  isSafari,
  isTablet,
  isMobile,
  osVersion,
  osName,
} from "react-device-detect";

import { VscFilePdf } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

import { BsJournalCode } from "react-icons/bs";

import { BsTerminal } from "react-icons/bs";
import About from "./components/windows/About";
import Start from "./components/windows/Start";

import DeviceInfo from "./components/windows/DeviceInfo";

import Projects from "./components/windows/Projects";
import Player from "./components/windows/Player";
import logo_white from "./img/logo_white.png";
import logoboot from "./img/logoboot.png";
import logoboot1 from "./img/logoboot1.png";

import logo_black from "./img/logo_black.png";
import circuit from "./background/circuit.mp4";
import abstract from "./background/abstract.mp4";
import board from "./background/board.mp4";
import board2 from "./background/board2.mp4";
import electronic from "./background/electronic.mp4";
import electronic2 from "./background/electronic2.mp4";
import electronic3 from "./background/electronic3.mp4";
import portal from "./background/portal.mp4";

import IconTask from "./components/IconTask";
import network from "./background/network.mp4";

import Icon from "./components/Icon";
import PlayListProvider2 from "./components/Player";
import Player23 from "./components/Player2";
import github_light from "./socials/github-light.png";
import Draggable from "react-draggable";
import github_dark from "./socials/github-dark.png";
import linkedin_light from "./socials/linkedin-light.png";
import linkedin_dark from "./socials/linkedin-dark.png";
import download_light from "./socials/download-light.png";
import download_dark from "./socials/download-dark.png";
import background_dark from "./background/dark.jpg";
import background_light from "./background/light.jpg";
import xp from "./background/xp.jpg";

import resumePdf from "./files/valentin-kisimov-resume.pdf";
import { AiFillLinkedin, AiOutlineLinkedin } from "react-icons/ai";
const App = () => {
  const [theme, setTheme] = useState(true);
  const [terminal, setTerminal] = useState(false);
  const [about, setAbout] = useState(false);
  const [start, setStart] = useState(false);
  const [zIndexxx, setZindexxx] = useState(6);
  const [terminal2, setTerminal2] = useState(false);

  const [device, setDevice] = useState(false);
  const [projects, setProjects] = useState(false);

  const [active, setActive] = useState(true);

  const onPress = () => {
    console.log("Hi");
    setTheme(!theme);
  };

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Welcome, ${username}!`);
  };

  const videoEl = useRef(null);

  const buttonRef = useRef(null);
  const [spinner, setSpinner] = useState(true);
  const [logovis, setLogovis] = useState(false);
  const [buttonvis, setButtonvis] = useState(false);

  let spinnerId, logoId;

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    // spinnerId = setTimeout(() => {
    //   setSpinner(true);
    // }, 700);
    // logoId = setTimeout(() => {
    //   setSpinner(false);
    //   setLogovis(true);
    // }, 1600);
    //attemptPlay();
    // return () => {
    //   clearTimeout(spinnerId);
    // };
  }, []);

  // const videoParentRef = useRef();

  // useEffect(() => {
  //   // check if user agent is safari and we have the ref to the container <div />
  //   if (isSafari() && videoParentRef.current) {
  //     // obtain reference to the video element
  //     const player = videoParentRef.current.children[0];

  //     // if the reference to video player has been obtained
  //     if (player) {
  //       // set the video attributes using javascript as per the
  //       // webkit Policy
  //       player.controls = false;
  //       player.playsinline = true;
  //       player.muted = true;
  //       player.setAttribute("muted", ""); // leave no stones unturned :)
  //       player.autoplay = true;

  //       // Let's wait for an event loop tick and be async.
  //       setTimeout(() => {
  //         // player.play() might return a promise but it's not guaranteed crossbrowser.
  //         const promise = player.play();
  //         // let's play safe to ensure that if we do have a promise
  //         if (promise.then) {
  //           promise
  //             .then(() => {})
  //             .catch(() => {
  //               // if promise fails, hide the video and fallback to <img> tag
  //               videoParentRef.current.style.display = "none";
  //               // setShouldUseImage(true);
  //             });
  //         }
  //       }, 0);
  //     }
  //   }
  // }, []);

  const themeVars =
    theme === true
      ? {
          app: {
            // backgroundImage: `url(${background_dark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // width: "100vw",
            // height: "100vh",
            // transition: "all 1s ease-in",
          },
          window: {
            backgroundColor: "#cfcfcf46",
            color: "white",
            transition: "all 1s ease-in",
          },
          field: {
            color: "#F4F4F4",
            fontWeight: "normal",
            backgroundColor: "#0f0e0ff3",
            borderBottom: "1px solid #cfcfcf46",
            borderLeft: "1px solid #cfcfcf46",
            borderRight: "1px solid #cfcfcf46",
            boxSizing: "border-box",
            boxShadow: "0 2px 5px #111",
            transition: "all 1s ease-in",
          },
          // cursor: { animation: "1.02s blink-dark step-end infinite" },
          closeBtn: { color: "white" },
        }
      : {
          app: {
            backgroundImage: `url(${xp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // width: "100%",
            // height: "100%",
            // transition: "all 1s ease",
          },
          window: {
            background: "rgb(19,60,156)",
            background:
              "linear-gradient(0deg, rgba(0,59,214,1) 4%, rgba(0,102,253,1) 9%, rgba(0,100,253,1) 15%, rgba(0,88,230,1) 77%, rgba(54,143,252,1) 91%, rgba(13,96,232,1) 95%)",
            color: "#E3E3E3",
            // transition: "all 1.5s ease",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            transition: "all 1s ease-in",
            fontFamily: "Segoe UI",
            fontWeight: "600",
            textShadow: "1px 2px 2px rgba(0, 0, 0, 0.4)",
          },
          field: {
            backgroundColor: "#E3E3E3",
            color: "#474554",
            fontWeight: "normal",
            // transition: "all 1.5s ease",
            boxShadow: "0 2px 5px #33333375",
            boxSizing: "border-box",
            // borderTop: "0px solid #0528b3",
            // borderLeft: "4px solid #1a4bbe",
            borderRight: "4px solid #003bd6",
            borderBottom: "4px solid #003bd6",
            borderLeft: "4px solid #003bd6",
            transition: "all 1s ease-in",
          },
          // cursor: { animation: "1.02s blink-light step-end infinite" },
          closeBtn: {
            color: "white",
            backgroundColor: "#ee6247",
            height: "25px",
            width: "25px",
            margin: "6px",
            border: "2px solid #ffffff85",
            borderRadius: "4px",
            fontSize: "22px",
            transition: "all 0.8s ease-in",
          },
        };

  return (
    <div id="app" className="app" style={themeVars.app}>
      <div id="loading"></div>
      <video
        className="video-background"
        playsInline
        loop
        muted
        autoPlay
        src={electronic3}
        ref={videoEl}
        type="video/mp4"
      />{" "}
      {/* <video
        className="video-background"
        playsInline
        muted
        src={portal}
        ref={videoEl}
        type="video/mp4"
      /> */}
      <div className="boot-screen" id="bootRoot">
        <div className="boot-screen-text" id="boot-text">
          <WindupChildren
            onFinished={() => {
              setSpinner(false);
              setLogovis(true);
            }}
          >
            <Pace ms={2}>
              Kisimoff OS v2.3.2 <br></br> <br></br>
              Loading system components...
              <Pause ms={200} /> OK <br></br> <br></br> <Pause ms={150} />
              Initializing BIOS...
              <Pause ms={300} /> OK <br></br> <br></br> <Pause ms={120} />
              Checking hardware configuration... <br></br>
              <br></br> <Pause ms={350} />
              Root OS: {osName} {osVersion}...
              <Pause ms={350} /> OK <br></br> <br></br> <Pause ms={400} />
              Starting system services...
              <Pause ms={550} /> OK <br></br> <br></br> <Pause ms={150} />
              Initializing security protocols...
              <Pause ms={400} /> OK
              {/* System time: [insert current time here] <br></br> <br></br> */}
            </Pace>
          </WindupChildren>
        </div>
        <div className="spinner" id="spinner">
          {spinner && <SpinnerCircular secondaryColor="#2f2f2f" />}
        </div>
        {logovis && (
          <div className="loginComplete">
            <WindupChildren onFinished={() => setButtonvis(true)}>
              <Pace ms={25}>
                <h2> Loading Complete... </h2>
              </Pace>
            </WindupChildren>{" "}
            {buttonvis && (
              <button
                className="login-button"
                onClick={() => {
                  document.getElementById("bootRoot").style.display = "none";
                  setLogovis(false);
                  attemptPlay();

                  setTimeout(() => {
                    setStart(true);
                  }, 1300);

                  // setTimeout(() => {
                  //   setStart(true);
                  // }, 5500);
                  // setTimeout(() => {
                  //   setLogovis(false);
                  // }, 5500);
                }}
              >
                {" "}
                Login{" "}
              </button>
            )}
          </div>
        )}
        <div className="login-screen" id="login-screen"></div>
      </div>
      {logovis && (
        <div className="logoBoot">
          {/* <img alt="logoBoot" src={logoboot1} /> */}
        </div>
      )}
      <div
        className="navbar"
        style={
          theme
            ? { color: "white", transition: "all 1.5s ease" }
            : {
                background: "rgb(23,65,163",
                background:
                  "linear-gradient(0deg, rgba(23,65,163,1) 0%, rgba(34,88,214,1) 9%, rgba(35,99,223,1) 22%, rgba(34,88,214,1) 82%, rgba(54,120,206,1) 93%, rgba(34,88,214,1) 100%)",
                transition: "all 1.5s ease",
              } //light theme
        }
      >
        <div
          className="nav-heading"
          id="test"
          style={
            theme
              ? { color: "white", transition: "all 1.5s ease" }
              : {
                  color: "white",
                  height: "100%",
                  borderBottomRightRadius: "10px",
                  borderTopRightRadius: "10px",
                }
          }
        >
          <img id="logo" alt="logo" src={logo_white} />

          <span style={isTablet ? { width: "350px" } : null}>
            Kisim
            <ToggleButton onChange={onPress} />
            {theme ? "ff" : "n"}
            &nbsp;OS
          </span>
        </div>
        <div
          className="nav-icon-task"
          style={isTablet ? { display: "none" } : null}
        >
          {terminal2 ? (
            <IconTask
              icon={BsTerminal}
              caption="Terminal"
              elementId="terminal2"
              selfId="task-terminal-icon"
              setVisibility={setTerminal2}
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
          <a
            href="#"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/valentin-kisimov-2719b41a1/"
              );
            }}
          >
            <SlSocialLinkedin className="nav-social-svg" />
            {/* <img
              alt="linkedin"
              src={theme ? linkedin_light : linkedin_dark}
              id="linkedin"
            /> */}
          </a>
          <a
            href="#"
            onClick={() => {
              window.open("https://github.com/vtwenty3");
            }}
          >
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
        {/* <Icon
          icon={BsTerminal}
          caption="Terminal"
          elementId="terminal"
          setVisibility={setTerminal}
          zIndexxx={zIndexxx}
          visibility={terminal}
          setZindexxx={setZindexxx}
        /> */}

        <Icon
          icon={BsTerminal}
          caption="Terminal"
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
            href="#"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing"
              );
            }}
            // href={
            //   "https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing"
            // }
          >
            {" "}
            <VscFilePdf className="icon" />
            <span className="caption">
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
        {/* <div className="hoverIcon">
          <a
            className="iconWrapper"
            href="#"
            onClick={() => {
              attemptPlay();
            }}
          >
            {" "}
            <VscFilePdf className="icon" />
            <span className="caption">start</span>
          </a>
        </div> */}

        {/* <Icon icon={GiHourglass} caption="Start" elementId="start" /> */}

        {/* <Icon
          icon={BsVinyl}
          caption="Music"
          line2="Player"
          elementId="player"
        /> */}
        {/* <Icon icon={VscFilePdf} caption="Pdf" line2="Viewer" elementId="pdf" /> */}
      </div>
      {/* {terminal ? (
        <Terminal
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setTerminal}
          alabala={setProjects}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
          elementId="terminal"
        />
      ) : null} */}
      {terminal2 ? (
        <Terminal2
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setTerminal2}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
          elementId="terminal2"
        />
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
