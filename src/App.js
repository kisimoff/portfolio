import React, { useState, useRef, useEffect } from "react";

import "./App.css";

// components and windows imports
import Projects from "./components/windows/Projects";
import ToggleButton from "./components/ToggleButton";
import Terminal2 from "./components/windows/Terminal2";
import About from "./components/windows/About";
import Start from "./components/windows/Start";
import DeviceInfo from "./components/windows/DeviceInfo";
import Icon from "./components/Icon";
import IconTask from "./components/IconTask";

//packages imports
import { SpinnerCircular } from "spinners-react";
import { WindupChildren, Pause, Pace } from "windups";
import { isTablet, osVersion, osName } from "react-device-detect";

//icons and media imports
import logo_white from "./img/logo_white.png";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { VscFilePdf, VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsJournalCode, BsTerminal, BsPersonCircle } from "react-icons/bs";
import electronic3 from "./background/electronic3.mp4";
import xp from "./background/xp.jpg";

//to be deleted
import portal from "./background/portal.mp4";
import logoboot from "./img/logoboot.png";
import logoboot1 from "./img/logoboot1.png";
import logo_black from "./img/logo_black.png";
import circuit from "./background/circuit.mp4";
import abstract from "./background/abstract.mp4";
import board from "./background/board.mp4";
import board2 from "./background/board2.mp4";
import electronic from "./background/electronic.mp4";
import electronic2 from "./background/electronic2.mp4";
import network from "./background/network.mp4";
import github_light from "./socials/github-light.png";
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
  //windows states
  const [boot, setBoot] = useState(true);

  const [theme, setTheme] = useState(true);
  const [about, setAbout] = useState(false);
  const [start, setStart] = useState(false);
  const [device, setDevice] = useState(false);
  const [projects, setProjects] = useState(false);
  const [terminal2, setTerminal2] = useState(false);

  //boot elements visability states
  const [spinner, setSpinner] = useState(true);
  const [logovis, setLogovis] = useState(false);
  const [buttonvis, setButtonvis] = useState(false);

  const [zIndexxx, setZindexxx] = useState(6);

  const onPress = () => {
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
      {boot ? (
        <>
          <video
            className="video-background"
            playsInline
            muted
            src={portal}
            ref={videoEl}
            type="video/mp4"
          />
          <div className="boot-screen" id="bootRoot">
            <div className="pattern-background">
              <div className="pattern-mask">
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
                      <Pause ms={200} /> OK <br></br> <br></br>{" "}
                      <Pause ms={150} />
                      Initializing BIOS...
                      <Pause ms={300} /> OK <br></br> <br></br>{" "}
                      <Pause ms={120} />
                      Checking hardware configuration... <br></br>
                      <br></br> <Pause ms={350} />
                      Root OS: {osName} {osVersion}...
                      <Pause ms={350} /> OK <br></br> <br></br>{" "}
                      <Pause ms={400} />
                      Starting system services...
                      <Pause ms={550} /> OK <br></br> <br></br>{" "}
                      <Pause ms={150} />
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
                          document.getElementById("bootRoot").style.display =
                            "none";
                          // setLogovis(false);
                          attemptPlay();
                          // setTimeout(() => {
                          //   setStart(true);
                          // }, 1300);

                          setTimeout(() => {
                            setStart(true);
                          }, 5500);
                          setTimeout(() => {
                            setLogovis(false);
                          }, 5500);
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
            </div>
          </div>
        </>
      ) : (
        <video
          className="video-background"
          playsInline
          loop
          muted
          autoPlay
          src={electronic3}
          ref={videoEl}
          type="video/mp4"
        />
      )}
      {logovis && (
        <div className="logoBoot">
          <img alt="logoBoot" src={logoboot1} />
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
          </a>
          <a
            href="#"
            onClick={() => {
              window.open("https://github.com/vtwenty3");
            }}
          >
            <VscGithubAlt className="nav-social-svg" />
          </a>
        </div>
      </div>
      <div className="icons">
        <Icon
          icon={BsTerminal}
          caption="Terminal"
          elementId="terminal2"
          setVisibility={setTerminal2}
          zIndexxx={zIndexxx}
          visibility={terminal2}
          setZindexxx={setZindexxx}
        />
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
          >
            {" "}
            <VscFilePdf className="icon" />
            <span className="caption">Resume</span>
          </a>
        </div>
      </div>
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
    </div>
  );
};

export default App;
