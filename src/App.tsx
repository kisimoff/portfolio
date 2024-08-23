import React, { useState } from 'react'

import './App.css'

import Projects from './components/windows/Projects'



import resume from '@assets/icons/xp/resume.png'


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


import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { useWindows, WindowKey } from '@contexts/WindowsContext'


import { VscFilePdf } from 'react-icons/vsc'
// import xp from './background/xpCompress.jpg'


const App = () => {
  //windows states
  const { iconsConfig, increaseZIndex } = useWindows()
  const { themeState, themeValues } = useTheme()
  const { iconsAnimation } = useAnimations()
  const [zIndexxx, setZindexxx] = useState(6)




  return (
    <div id="app" className="app" style={themeValues.app}>
      <LoadingScreen />
      <Navbar
        isTablet={isTablet}
        zIndexxx={zIndexxx}
        setZindexxx={setZindexxx}
      />
      <motion.div
        className="icons"
        animate={iconsAnimation}
        initial={{ opacity: 0, y: 8 }}
      >
        {Object.entries(iconsConfig).map(([key, iconConfig]) => (
          <Icon
            key={key}
            icon={iconConfig.osIcon}
            xpIcon={iconConfig.xpIcon}
            caption={iconConfig.caption}
            elementId={iconConfig.elementId}
            setVisibility={iconConfig.setVisibility}
            visibility={iconConfig.visibility}
            increaseZIndex={()=>increaseZIndex(key as WindowKey)}
            // zIndexxx={zIndexxx}
            // setZindexxx={setZindexxx}
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
      {iconsConfig.about.visibility && <About />}
      {iconsConfig.projects.visibility && <Projects />}
      {iconsConfig.deviceInfo.visibility && <DeviceInfo />}
      {iconsConfig.credits.visibility && <Credits />}
      {iconsConfig.start.visibility && <Start />}
    </div>
  )
}

export default App
