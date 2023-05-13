import React, { useState, useRef, useEffect } from "react";

import "./App.css";

// components and windows imports
import Projects from "./components/windows/Projects";
import LogoBoot from "./components/logoBoot";
import LogoBoot2 from "./components/logoBoot2";
import mycomp from "./icons/xp/mycomp.png";
import info from "./icons/xp/about.png";
import cmd from "./icons/xp/cmd.png";
import mydocs from "./icons/xp/mydocs.png";
import resume from "./icons/xp/resume.png";

import aboutme_os from "./icons/os/about.png";
import device_os from "./icons/os/device.png";
import terminal_os from "./icons/os/terminal.png";
import projects_os from "./icons/os/projects.png";
import resume_os from "./icons/os/resume.png";
import c3po from "./icons/os/c3po.png";

import ToggleButton from "./components/ToggleButton";
import Terminal2 from "./components/windows/Terminal2";
import About from "./components/windows/About";
import Start from "./components/windows/Start";
import DeviceInfo from "./components/windows/DeviceInfo";
import Icon from "./components/Icon";
import IconTask from "./components/IconTask";
import { motion, useAnimation } from "framer-motion";

//packages imports
import { SpinnerCircular } from "spinners-react";
import { WindupChildren, Pause, Pace, Effect } from "windups";
import {
  isTablet,
  osVersion,
  osName,
  browserName,
  browserVersion,
  engineName,
  engineVersion,
  deviceType,
} from "react-device-detect";

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

  const [pattern, setPattern] = useState(false);
  const [theme, setTheme] = useState(true);
  const [about, setAbout] = useState(false);
  const [start, setStart] = useState(false);
  const [device, setDevice] = useState(false);
  const [projects, setProjects] = useState(false);
  const [terminal2, setTerminal2] = useState(false);

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(true);
  const [step3, setStep3] = useState(true);
  const [step4, setStep4] = useState(true);
  //boot elements visability states
  const [spinner, setSpinner] = useState(true);
  const [logo, setLogo] = useState(true);
  const [buttonvis, setButtonvis] = useState(false);
  const navbarAnimation = useAnimation();
  const iconsAnimation = useAnimation();
  const backgroundAnimation = useAnimation();

  const [zIndexxx, setZindexxx] = useState(6);

  const togglePress = () => {
    setTheme(!theme);
    if (theme) {
      backgroundAnimation.start({
        opacity: 0,
        transition: { duration: 1, ease: "easeIn" },
      });
    } else {
      backgroundAnimation.start({
        opacity: 1,
        transition: { duration: 1, ease: "easeIn" },
      });
    }
  };

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  const logoClick = () => {
    sequence();
    document.getElementById("bootRoot").style.display = "none";
    // setLogovis(false);
    attemptPlay();
    // setTimeout(() => {
    //   setStart(true);
    // }, 1300);
    setTimeout(() => {
      setStart(true);
    }, 5500);
    setTimeout(() => {
      setLogo(false);
    }, 5500);
  };

  const sequence = async () => {
    await navbarAnimation.start({
      y: 0,
      transition: { duration: 1.5, delay: 5 },
    });
    await iconsAnimation.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: 0.8 },
    });
  };

  // useEffect(() => {
  //   if (pattern) {
  //     // Use requestAnimationFrame to ensure the initial render is painted before the .animate class is added
  //     requestAnimationFrame(() => {
  //       document.querySelector(".pattern-mask").classList.add("animate");
  //     });
  //   } else {
  //     document.querySelector(".pattern-mask").classList.remove("animate");
  //   }
  // }, [pattern]);

  const themeVars =
    theme === true
      ? {
          app: {
            // backgroundImage: `url(${background_dark})`,
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
            // backgroundImage: `url(${xp})`,
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
      {/* {logo && <LogoBoot onLogoClick={logoClick} />} */}
      {logo && <LogoBoot2 onLogoClick={logoClick} />}

      {boot ? (
        <>
          <motion.div initial={{ opacity: 1 }} animate={backgroundAnimation}>
            <video
              className="video-background"
              playsInline
              muted
              src={portal}
              ref={videoEl}
              type="video/mp4"
            />
          </motion.div>
          <div className="boot-screen" id="bootRoot">
            <div className="pattern-background">
              <div className={`pattern-mask ${pattern ? "animate" : ""}`}></div>
              <div className="pattern-reveal">
                <div className="boot-screen-text" id="boot-text">
                  <WindupChildren
                    onFinished={() => {
                      // setSpinner(false);
                      // setLogovis(true);
                    }}
                  >
                    {step3 && (
                      <Pace ms={0}>
                        Kisimoff OS v2.3.2
                        <br />
                        <Pause ms={500} />
                        {step1 && (
                          <>
                            <Pause ms={20} />
                            <br /> Checking hardware compatibility
                            <Pace ms={200}>...</Pace>
                            <Pause ms={300} />
                            <br />
                            Type:
                            {deviceType}
                            <br /> <Pause ms={100} /> OS:
                            {osName} Version: {osVersion}
                            <br />
                            <Pause ms={100} />
                            Browser:
                            {browserName} Version: {browserVersion} <br />
                            <Pause ms={100} />
                            Engine: {engineName} Version:
                            {engineVersion}
                            <Pause ms={400} /> <br />
                            Compatibility
                            <Pace ms={200}>...</Pace>
                            <Pause ms={200} /> OK
                            <Pause ms={400} />
                          </>
                        )}
                        <Effect
                          fn={() => {
                            setStep1(false);
                          }}
                        />
                        {step2 && (
                          <>
                            <br /> Loading system drivers...
                            <br /> Verifying system configuration...
                            <br /> Initializing user interface...{" "}
                            <Pause ms={100} />
                            <br /> Loading system fonts...
                            <br /> Configuring system preferences...
                            <br /> Mounting files...
                            <Pause ms={400} />
                            <br /> Loading system services...
                            <br /> Initializing networking protocols...
                            <br /> Establishing secure connections...
                            <br /> Preparing desktop environment...
                            <br /> Optimizing system performance...
                            <br /> Initializing input/output devices...
                            <br /> Loading system utilities...
                            <Pause ms={100} />
                            <br /> Verifying system integrity...
                            <br /> Loading system log files...
                            <br /> Configuring power management settings...
                            <br /> Loading application framework...
                            <br /> Verifying user browser settings...
                            <br /> Loading system themes...
                            <br /> Initializing audio subsystem...
                            <br /> Loading system diagnostics...
                            <br /> Scanning for available updates...
                            <Pause ms={50} />
                            <br /> Configuring system notifications...
                            <br /> Loading system resources...
                            <br /> Initializing system clock...
                            <br /> Loading system virtualization...
                            <br /> Establishing system backups...
                            <br /> Loading system firewall...
                            <br /> Initializing system database...
                            <br /> Loading system startup scripts...
                            <Pause ms={50} />
                            <br /> Verifying system licenses...
                            <br /> Initializing system multitasking...
                            <br /> Loading system security patches...
                            <br /> Initializing system memory...
                            <Pause ms={80} />
                            <br /> Loading system encryption tools...
                            <br /> Checking system for malware...
                            <br /> Loading system updates
                            <Pace ms={150}>...</Pace>
                            OK
                            <Pause ms={400} />
                            <br />
                            <br />
                            Loading complete...
                            <Pause ms={1300} />
                            <Effect
                              fn={() => {
                                setPattern(!pattern);

                                setStep3(false);
                              }}
                            />
                          </>
                        )}
                        {/* System time: [insert current time here] <br></br> <br></br> */}
                      </Pace>
                    )}
                  </WindupChildren>
                </div>
                <div className="login-screen" id="login-screen"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <motion.div>
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
        </motion.div>
      )}
      {/* {logovis && (
        <div className="logoBoot">
          <img alt="logoBoot" src={logoboot1} />
        </div>
      )} */}
      <motion.div
        className="navbar"
        animate={navbarAnimation}
        initial={{ y: 100 }}
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
            <ToggleButton onChange={togglePress} />
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
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/valentin-kisimov-2719b41a1/"
              );
            }}
          >
            <SlSocialLinkedin className="nav-social-svg" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            onClick={() => {
              window.open("https://github.com/vtwenty3");
            }}
          >
            <VscGithubAlt className="nav-social-svg" />
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="icons"
        animate={iconsAnimation}
        initial={{ opacity: 0, y: 8 }}
      >
        <Icon
          theme={theme}
          icon={BsTerminal}
          osIcon={terminal_os}
          xpIcon={cmd}
          caption="Terminal"
          elementId="terminal2"
          setVisibility={setTerminal2}
          zIndexxx={zIndexxx}
          visibility={terminal2}
          setZindexxx={setZindexxx}
        />
        <Icon
          theme={theme}
          icon={BsPersonCircle}
          // osIcon={aboutme_os}
          osIcon={c3po}
          caption="About"
          xpIcon={info}
          elementId="about"
          setVisibility={setAbout}
          visibility={about}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
        />
        <Icon
          theme={theme}
          osIcon={device_os}
          icon={TbDeviceDesktopAnalytics}
          caption="Device"
          xpIcon={mycomp}
          elementId="deviceInfo"
          setVisibility={setDevice}
          zIndexxx={zIndexxx}
          visibility={device}
          setZindexxx={setZindexxx}
        />
        <Icon
          theme={theme}
          osIcon={projects_os}
          icon={BsJournalCode}
          caption="Projects"
          xpIcon={mydocs}
          elementId="projects"
          setVisibility={setProjects}
          zIndexxx={zIndexxx}
          visibility={projects}
          setZindexxx={setZindexxx}
        />
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="iconWrapper"
          href="#"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing"
            );
          }}
        >
          {theme == true ? (
            <img src={resume_os} className="icon" />
          ) : (
            // <VscFilePdf className="icon" />
            <img src={resume} className="icon" />
          )}
          <span className="caption">Resume</span>
        </motion.a>
      </motion.div>
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
