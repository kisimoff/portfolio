import React, { useState } from 'react'

import './App.css'

import Projects from './components/windows/Projs'

import mycomp from './icons/xp/mycomp.png'
import info from './icons/xp/about.png'
import cmd from './icons/xp/cmd.png'
import mydocs from './icons/xp/mydocs.png'

import resume from './icons/xp/resume.png'
import device_os from './icons/os/device.png'
import terminal_os from './icons/os/terminal.png'
import projects_os from './icons/os/projects.png'
import c3po from './icons/os/c3po.png'
 
import Credits from './components/windows/Credits'
import About from './components/windows/About'
import Start from './components/windows/Start'
import DeviceInfo from './components/windows/DeviceInfo' 
import Icon from './components/Icon'
import { motion } from 'framer-motion'
import LoadingScreen from '@components/screens/LoadingScreen'
import Navbar from '@components/Navbar'
//packages imports
import {
  isTablet,
} from 'react-device-detect'

//icons and media imports
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { VscFilePdf } from 'react-icons/vsc'

import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { useWindows } from '@contexts/WindowsContext'

import { BsJournalCode, BsTerminal, BsPersonCircle } from 'react-icons/bs'
// import xp from './background/xpCompress.jpg'


const App = () => {
  //windows states
  const { about, setAbout, start, setStart, device, setDevice, projects, setProjects, terminal2, setTerminal2, credits, setCredits } = useWindows()


  const { themeState, themeValues } = useTheme()
  const { elementsSequenceAnimation, iconsAnimation } = useAnimations()


  const [zIndexxx, setZindexxx] = useState(6)

 

  const openCredits = () => {
    setCredits(true)
  }
  
  const logoClick = () => {
    elementsSequenceAnimation()
    setTimeout(() => {
      setStart(true)
    }, 12000)
  }


  const iconsConfig = [
    {
      icon: BsTerminal,
      osIcon: terminal_os,
      xpIcon: cmd,
      caption: 'Terminal',
      elementId: 'terminal2',
      setVisibility: setTerminal2,
      visibility: terminal2,
    },
    {
      icon: BsPersonCircle,
      osIcon: c3po,
      caption: 'About',
      xpIcon: info,
      elementId: 'about',
      setVisibility: setAbout,
      visibility: about,
    },
    {
      osIcon: device_os,
      icon: TbDeviceDesktopAnalytics,
      caption: 'Device',
      xpIcon: mycomp,
      elementId: 'deviceInfo',
      setVisibility: setDevice,
      visibility: device,
    },
    {
      osIcon: projects_os,
      icon: BsJournalCode,
      caption: 'Projects',
      xpIcon: mydocs,
      elementId: 'projects',
      setVisibility: setProjects,
      visibility: projects,
    },
  ]


  return (
    <div id="app" className="app" style={themeValues.app}>
      
      <LoadingScreen
        openCredits={openCredits}
        onLogoClick={logoClick}
      />
      
      <Navbar
        // theme={theme}
        // themeValues={themeValues}
        isTablet={isTablet}
        terminal2={terminal2}
        about={about}
        device={device}
        projects={projects}
        credits={credits}
        setTerminal2={setTerminal2}
        setAbout={setAbout}
        setDevice={setDevice}
        setProjects={setProjects}
        setCredits={setCredits}
        zIndexxx={zIndexxx}
        setZindexxx={setZindexxx}
        // navbarAnimation={navbarAnimation}
      />


      <motion.div
        className="icons"
        animate={iconsAnimation}
        initial={{opacity: 0, y: 8}}
      >
        {iconsConfig.map((iconConfig, index) => (
          <Icon
            key={index}
            icon={iconConfig.icon}
            xpIcon={iconConfig.xpIcon}
            caption={iconConfig.caption}
            elementId={iconConfig.elementId}
            setVisibility={iconConfig.setVisibility}
            visibility={iconConfig.visibility}
            zIndexxx={zIndexxx}
            setZindexxx={setZindexxx}
          />
        ))}
        <motion.a
          className="iconWrapper"
          href="#"
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing'
            )
          }}
        >
          {themeState === 'dark' ? (
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
          theme={themeValues}
          setTheme={setTheme}
          setVisibility={setTerminal2}
          zIndexxx={zIndexxx}
          setZindexxx={setZindexxx}
          elementId="terminal2"
        />
      ) : null} */}
      {about && <About theme={themeValues} setVisibility={setAbout} zIndexxx={zIndexxx} setZindexxx={setZindexxx} />}
      {projects && <Projects theme={themeValues} setVisibility={setProjects} zIndexxx={zIndexxx} setZindexxx={setZindexxx} />}
      {device && <DeviceInfo theme={themeValues} setVisibility={setDevice} zIndexxx={zIndexxx} setZindexxx={setZindexxx} />}
      {credits && <Credits theme={themeValues} setVisibility={setCredits} zIndexxx={zIndexxx} setZindexxx={setZindexxx} />}
      {start && <Start theme={themeValues} setVisibility={setStart} />}
    </div>
  )
}

export default App
