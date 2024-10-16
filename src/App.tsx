import '@/App.css'

import Projects from '@components/windows/Projects'
import resume from '@assets/icons/xp/resume.png'
import Credits from '@components/windows/Credits'
import About from '@components/windows/About'
import Xterm from '@components/windows/Xterm'

import Start from '@components/windows/Start'
import DeviceInfo from '@components/windows/DeviceInfo'
import Icon from '@components/Icon'
import LoadingScreen from '@components/screens/LoadingScreen'
import Navbar from '@components/Navbar'

import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { useWindows } from '@contexts/WindowsContext'

import { motion } from 'framer-motion'

import { VscFilePdf } from 'react-icons/vsc'


const App = () => {
  const { windows } = useWindows()
  const { themeState, themeValues } = useTheme()
  const { iconsAnimation } = useAnimations()

  return (
    <div id="app" className="app" style={themeValues.app}>
      <LoadingScreen />
      <Navbar />
      <motion.ol
        className="icons"
        animate={iconsAnimation}
        initial={{ opacity: 0, y: 8 }}
      >

        {Object.entries(windows).map(([key, window]) => (
          <Icon key={key} window={window} />
        ))}
      </motion.ol>

      {/* <motion.a
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
            <img src={resume} className="icon" />
          )}
          <span className="caption">Resume</span>
        </motion.a> */}

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
      {windows.about.visibility && <About />}
      {windows.projects.visibility && <Projects />}
      {windows.deviceInfo.visibility && <DeviceInfo />}
      {windows.credits.visibility && <Credits />}
      {windows.start.visibility && <Start />}
      {windows.terminal2.visibility && <Xterm />}

    </div>
  )
}

export default App
