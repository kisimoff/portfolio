import React, { useState } from 'react'

import './App.css'

import Projects from './components/windows/Projs'

import mycomp from './icons/xp/mycomp.png'
import info from './icons/xp/about.png'
import cmd from './icons/xp/cmd.png'
import mydocs from './icons/xp/mydocs.png'
import star from './icons/xp/credits.png'

import resume from './icons/xp/resume.png'
import device_os from './icons/os/device.png'
import terminal_os from './icons/os/terminal.png'
import projects_os from './icons/os/projects.png'
import c3po from './icons/os/c3po.png'
 
import Credits from './components/windows/Credits'
import ToggleButton from './components/ToggleButton'
import About from './components/windows/About'
import Start from './components/windows/Start'
import DeviceInfo from './components/windows/DeviceInfo' 
import Icon from './components/Icon'
import IconTask from './components/IconTask'
import { motion, useAnimation } from 'framer-motion'
import LoadingScreen from '@components/screens/LoadingScreen'

//packages imports
import {
  isTablet,
} from 'react-device-detect'

//icons and media imports
import logo_white from './img/logo_white.png'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { VscFilePdf, VscGithubAlt } from 'react-icons/vsc'
// import { LiaGitlab } from "react-icons/lia";
import { IoLogoGitlab } from 'react-icons/io5'

import { SlSocialLinkedin } from 'react-icons/sl'
import { BsJournalCode, BsTerminal, BsPersonCircle } from 'react-icons/bs'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import xp from './background/xpCompress.jpg'


const App = () => {
  //windows states
  const [theme, setTheme] = useState(true)
  const [about, setAbout] = useState(false)
  const [start, setStart] = useState(false)
  const [device, setDevice] = useState(false)
  const [projects, setProjects] = useState(false)
  const [terminal2, setTerminal2] = useState(false)
  const [credits, setCredits] = useState(false)

  const navbarAnimation = useAnimation()
  const iconsAnimation = useAnimation()
  const backgroundAnimation = useAnimation()


  const [zIndexxx, setZindexxx] = useState(6)

  const togglePress = () => {
    if (theme) {
      backgroundAnimation.start({
        opacity: 0,
        transition: { duration: 1, ease: 'easeIn' },
      })
    } else {
      backgroundAnimation.start({
        opacity: 1,
        transition: { duration: 1, ease: 'easeIn' },
      })
    }
    setTheme(!theme)
  }

  const openCredits = () => {
    setCredits(true)
  }
  const logoClick = () => {
    elementsSequenceAnimation()
    setTimeout(() => {
      setStart(true)
    }, 12000)
  }


  const elementsSequenceAnimation = async () => {
    if (window.innerWidth > 800 && window.innerHeight > 400) {
      navbarAnimation.set({ y: 100 })

      await navbarAnimation.start({
        y: 0,
        transition: { duration: 1.5, delay: 5 },
      })
    } else {
      navbarAnimation.set({ y: -100 })

      await navbarAnimation.start({
        y: 0,
        transition: { duration: 1.5, delay: 5 },
      })
    }
    await iconsAnimation.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: 0.8 },
    })
  }

  const themeVars =
    theme === true
      ? {
        window: {
          backgroundColor: '#cfcfcf46',
          color: 'white',
        },
        field: {
          color: '#F4F4F4',
          fontWeight: 'normal',
          backgroundColor: '#0f0e0ff3',
          borderBottom: '1px solid #cfcfcf46',
          borderLeft: '1px solid #cfcfcf46',
          borderRight: '1px solid #cfcfcf46',
          boxSizing: 'border-box',
          boxShadow: '0 2px 5px #111',
          transition: 'all 0.2s ',
        },
        // cursor: { animation: "1.02s blink-dark step-end infinite" },
        closeBtn: { color: 'white' },
      }
      : {
        app: {
          backgroundImage: `url(${xp})`,
          backgroundSize: 'cover',
          // transition: "none",
        },
        window: {
          // background: "rgb(19,60,156)",
          background:
              'linear-gradient(0deg, rgba(0,59,214,1) 2%, rgba(0,102,253,1) 15%, rgba(0,100,253,1) 20%, rgba(0,88,230,1) 85%, rgba(54,143,252,1) 95%, rgba(13,96,232,1) 98%)',
          color: '#E3E3E3',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
          transition: 'all 0.5s ease-in',
          fontFamily: 'Segoe UI',
          fontWeight: '600',
          textShadow: '1px 2px 2px rgba(0, 0, 0, 0.4)',
          boxShadow: 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2)',
          boxSizing: 'border-box',
        },
        iconTask: {
          // backgroundColor: "#ffffff",
          paddingRight: '1rem',
          borderBottom: 'none',
          borderRadius: '4px',
          boxShadow: '1px 2px 2px #33333375',
          borderLeft: '1px solid rgba(146, 165, 187, 0.56)',
          background:
              'linear-gradient(0deg, rgba(97,167,240,1) 0%, rgba(48,137,241,1) 6%, rgba(48,137,241,1) 93%, rgba(52,135,241,1) 97%, rgba(97,167,240,1) 100%)',
        },
        iconTaskCaption: {
          paddingRight: '1.5rem',
          fontSize: '1.1rem',
        },
        field: {
          backgroundColor: '#E3E3E3',
          color: '#474554',
          fontWeight: 'normal',
          // transition: "all 1.5s ease",
          boxShadow: '0 2px 5px #33333375',
          boxSizing: 'border-box',
          borderRight: '4px solid #003bd6',
          borderBottom: '4px solid #003bd6',
          borderLeft: '4px solid #003bd6',
          // boxShadow: "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
          // boxSizing: "border-box",
          transition: 'all 0.5s ',
        },
        // cursor: { animation: "1.02s blink-light step-end infinite" },
        closeBtn: {
          color: 'white',
          backgroundColor: '#ee6247',
          height: '25px',
          width: '25px',
          margin: '6px',
          border: '2px solid #ffffff85',
          borderRadius: '4px',
          fontSize: '22px',
          transition: 'all 0.8s ease-in',
        },
        navbar: {
          background:
              'linear-gradient(0deg, rgba(23,65,163,1) 0%, rgba(34,88,214,1) 9%, rgba(35,99,223,1) 22%, rgba(34,88,214,1) 82%, rgba(54,120,206,1) 93%, rgba(34,88,214,1) 100%)',
          transition: 'all 1.5s ease',
        },

      }

  return (
    <div id="app" className="app" style={themeVars.app}>
      <LoadingScreen
        themeVars={themeVars}
        openCredits={openCredits}
        onLogoClick={logoClick}
      />

      <motion.div
        className="navbar"
        animate={navbarAnimation}
        initial={{ y: 0 }}
        style={themeVars.navbar}
      >
        <div className="nav-heading">
          <img id="logo" alt="logo" src={logo_white} />
          <span style={isTablet ? { width: '350px' } : null}>
            Kisim
            <ToggleButton onChange={togglePress} />
            {theme ? 'ff' : 'n'}
            &nbsp;OS
          </span>
        </div>
        <div
          className="nav-icon-task"
          style={isTablet ? { display: 'none' } : null}
        >
          {terminal2 ? (
            <IconTask
              themeVars={themeVars}
              theme={theme}
              icon={BsTerminal}
              caption="Terminal"
              xpIcon={cmd}
              elementId="terminal2"
              selfId="task-terminal-icon"
              setVisibility={setTerminal2}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
          {about ? (
            <IconTask
              themeVars={themeVars}
              theme={theme}
              icon={BsPersonCircle}
              caption="About"
              xpIcon={info}
              elementId="about"
              selfId="task-about-icon"
              setVisibility={setAbout}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
          {device ? (
            <IconTask
              themeVars={themeVars}
              theme={theme}
              icon={TbDeviceDesktopAnalytics}
              caption="Device"
              xpIcon={mycomp}
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
              themeVars={themeVars}
              theme={theme}
              icon={BsJournalCode}
              caption="Projects"
              xpIcon={mydocs}
              elementId="projects"
              selfId="task-projects-icon"
              setVisibility={setProjects}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
          {credits ? (
            <IconTask
              themeVars={themeVars}
              theme={theme}
              icon={AiOutlineCopyrightCircle}
              caption="Credits"
              xpIcon={star}
              elementId="credits"
              selfId="task-credits-icon"
              setVisibility={setCredits}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null}
        </div>
        <div className="nav-socials">
          <motion.a
            href="#"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/valentin-kisimov-2719b41a1/'
              )
            }}
          >
            <SlSocialLinkedin className="nav-social-svg"/>
          </motion.a>
          <motion.a
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            href="#"
            onClick={() => {
              window.open('https://github.com/kisimoff')
            }} 
          >

            <VscGithubAlt className="nav-social-svg"/>
          </motion.a>
          <motion.a
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            href="#"
            onClick={() => {
              window.open('https://gitlab.com/vkisimov')
            }}
          >
            <IoLogoGitlab className="nav-social-svg"/>
          </motion.a>


        </div>
      </motion.div>
      <motion.div
        className="icons"
        animate={iconsAnimation}
        initial={{opacity: 0, y: 8}}
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
          // whileHover={{ scale: 1.07 }}
          // whileTap={{ scale: 0.95 }}
          className="iconWrapper"
          href="#"
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing'
            )
          }}
        >
          {theme === true ? (
            <VscFilePdf className="icon" />
          ) : (
            // <img src={resume_os} className="icon" />
            <img src={resume} className="icon" />
          )}
          <span className="caption">Resume</span>
        </motion.a>
      </motion.div>
      {/* {terminal2 ? (
        <Terminal2
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setTerminal2}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
          elementId="terminal2"
        />
      ) : null} */}
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
      {credits ? (
        <Credits
          theme={themeVars}
          setTheme={setTheme}
          setVisibility={setCredits}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
        />
      ) : null}

      {start ? (
        <Start theme={themeVars} setTheme={setTheme} setVisibility={setStart} />
      ) : null}
    </div>
  )
}

export default App
