import React from 'react'
import { motion } from 'framer-motion'
import { SlSocialLinkedin } from 'react-icons/sl'
import { VscGithubAlt } from 'react-icons/vsc'
import { IoLogoGitlab } from 'react-icons/io5'
import { BsJournalCode, BsTerminal, BsPersonCircle } from 'react-icons/bs'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import ToggleButton from './ToggleButton'
import IconTask from './IconTask'
import logo_white from '../img/logo_white.png'
import cmd from '../icons/xp/cmd.png'
import info from '../icons/xp/about.png'
import mycomp from '../icons/xp/mycomp.png'
import mydocs from '../icons/xp/mydocs.png'
import star from '../icons/xp/credits.png'

import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'



interface NavbarProps {
  // theme: boolean;
  // themeValues: any;
  isTablet: boolean;
  terminal2: boolean;
  about: boolean;
  device: boolean;
  projects: boolean;
  credits: boolean;
  setTerminal2: React.Dispatch<React.SetStateAction<boolean>>;
  setAbout: React.Dispatch<React.SetStateAction<boolean>>;
  setDevice: React.Dispatch<React.SetStateAction<boolean>>;
  setProjects: React.Dispatch<React.SetStateAction<boolean>>;
  setCredits: React.Dispatch<React.SetStateAction<boolean>>;
  zIndexxx: number;
  setZindexxx: React.Dispatch<React.SetStateAction<number>>;
  // navbarAnimation: AnimationControls;
}

const Navbar: React.FC<NavbarProps> = ({
  isTablet,
  terminal2,
  about,
  device,
  projects,
  credits,
  setTerminal2,
  setAbout,
  setDevice,
  setProjects,
  setCredits,
  zIndexxx,
  setZindexxx,
  // navbarAnimation
}) => {
  const { themeState, themeValues, toggleTheme } = useTheme()
  const { navbarAnimation } = useAnimations()


  return (
    <motion.div
      className="navbar"
      animate={navbarAnimation}
      initial={{ y: 0 }}
      style={themeValues.navbar}
    >
      <div className="nav-heading">
        <img id="logo" alt="logo" src={logo_white} />
        <span style={isTablet ? { width: '350px' } : null}>
          Kisim
          <ToggleButton onChange={toggleTheme} />
          {themeState === 'dark' ? 'ff' : 'n'}
          &nbsp;OS
        </span>
      </div>
      <div
        className="nav-icon-task"
        style={isTablet ? { display: 'none' } : null}
      >
        {terminal2 ? (
          <IconTask
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/valentin-kisimov-2719b41a1/'
            )
          }}
        >
          <SlSocialLinkedin className="nav-social-svg" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#"
          onClick={() => {
            window.open('https://github.com/kisimoff')
          }}
        >
          <VscGithubAlt className="nav-social-svg" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#"
          onClick={() => {
            window.open('https://gitlab.com/vkisimov')
          }}
        >
          <IoLogoGitlab className="nav-social-svg" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Navbar