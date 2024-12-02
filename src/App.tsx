import '@/App.css'

import Projects from '@components/windows/Projects'
// import resume from '@assets/icons/xp/resume.png'
import Credits from '@components/windows/Credits'
import About from '@components/windows/About'
import Xterm from '@/components/windows/Xterm'
import Winamp from '@/components/windows/Winamp'

import Start from '@components/windows/Start'
import DeviceInfo from '@components/windows/DeviceInfo'
import Icon from '@components/Icon'
import LoadingScreen from '@components/screens/LoadingScreen'
import Navbar from '@components/Navbar'

import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { useWindows } from '@contexts/WindowsContext'

import { motion } from 'framer-motion'

import { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { useMediaQuery } from 'react-responsive'


const App = () => {
  const { windows } = useWindows()
  const { themeValues } = useTheme()
  const { iconsAnimation } = useAnimations()
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const { closeWindow } = useWindows()
  const pdfUrl = 'https://drive.google.com/file/d/194vwPBZOhUi4D4KlQjOLlAt3p-syLLo-/view?usp=sharing'

  useEffect(() => {
    if (windows.resume.visibility) {
      window.open(pdfUrl, '_blank')
      closeWindow('resume')
    }
  }, [closeWindow, windows.resume.visibility])

  useEffect(() => {

  }, [])

  return (
    <div id="app" className="app" style={themeValues.app}>
      <LoadingScreen />
      <Navbar />
      <motion.ol
        className={isMobile || isSmallScreen ? 'mobile-icons' : 'icons'}
        animate={iconsAnimation}
        initial={{ opacity: 0, y: 8 }}
      >

        {Object.entries(windows)
          .filter(([key]) => !['start', 'credits'].includes(key)) // Exclude 'start' and 'credits'
          .map(([key, window]) => (
            <Icon key={key} window={window} />
          ))}

      </motion.ol>



      {windows.about.visibility && <About />}
      {windows.projects.visibility && <Projects />}
      {windows.deviceInfo.visibility && <DeviceInfo />}
      {windows.credits.visibility && <Credits />}
      {windows.start.visibility && <Start />}
      {windows.terminal2.visibility && <Xterm />}
      {windows.winamp.visibility && <Winamp />}

    </div>
  )
}

export default App
