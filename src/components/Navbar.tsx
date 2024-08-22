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
import cmd from '@assets/icons/xp/cmd.png'
import info from '@assets/icons/xp/about.png'
import mycomp from '@assets/icons/xp/mycomp.png'
import mydocs from '@assets/icons/xp/mydocs.png'
import star from '@assets/icons/xp/credits.png'

import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { useWindows } from '@contexts/WindowsContext'

interface NavbarProps {
  isTablet: boolean;
  zIndexxx: number;
  setZindexxx: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({
  isTablet,
  zIndexxx,
  setZindexxx,
}) => {
  const { themeState, themeValues, toggleTheme } = useTheme()
  const { navbarAnimation } = useAnimations()
  const { terminal2, setTerminal2, about, setAbout, device, setDevice, projects, setProjects, credits, setCredits } = useWindows()

  const iconTasksConfig = [
    {
      condition: terminal2,
      icon: BsTerminal,
      caption: 'Terminal',
      xpIcon: cmd,
      elementId: 'terminal2',
      selfId: 'task-terminal-icon',
      setVisibility: setTerminal2,
    },
    {
      condition: about,
      icon: BsPersonCircle,
      caption: 'About',
      xpIcon: info,
      elementId: 'about',
      selfId: 'task-about-icon',
      setVisibility: setAbout,
    },
    {
      condition: device,
      icon: TbDeviceDesktopAnalytics,
      caption: 'Device',
      xpIcon: mycomp,
      elementId: 'deviceInfo',
      selfId: 'task-deviceInfo-icon',
      setVisibility: setDevice,
    },
    {
      condition: projects,
      icon: BsJournalCode,
      caption: 'Projects',
      xpIcon: mydocs,
      elementId: 'projects',
      selfId: 'task-projects-icon',
      setVisibility: setProjects,
    },
    {
      condition: credits,
      icon: AiOutlineCopyrightCircle,
      caption: 'Credits',
      xpIcon: star,
      elementId: 'credits',
      selfId: 'task-credits-icon',
      setVisibility: setCredits,
    },
  ]

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
        {iconTasksConfig.map((config, index) => (
          config.condition ? (
            <IconTask
              key={index}
              icon={config.icon}
              caption={config.caption}
              xpIcon={config.xpIcon}
              elementId={config.elementId}
              selfId={config.selfId}
              setVisibility={config.setVisibility}
              zIndexxx={zIndexxx}
              setZindexxx={setZindexxx}
            />
          ) : null
        ))}
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