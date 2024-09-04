import '@/App.css'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import Projects from '@components/windows/Projects'
import resume from '@assets/icons/xp/resume.png'
import Credits from '@components/windows/Credits'
import About from '@components/windows/About'
import Start from '@components/windows/Start'
import DeviceInfo from '@components/windows/DeviceInfo'
import Icon from '@components/Icon'
import LoadingScreen from '@components/screens/LoadingScreen'
import Navbar from '@components/Navbar'
import GridLayout from 'react-grid-layout'

import { useTheme } from '@contexts/ThemeContext'
import { useAnimations } from '@contexts/AnimationsContext'
import { useWindows } from '@contexts/WindowsContext'

import { motion } from 'framer-motion'



const App = () => {
  const { windows } = useWindows()
  const {  themeValues } = useTheme()
  const { iconsAnimation } = useAnimations()
  const iconLayout = Object.entries(windows).map(([key, window]) => ({
    i: key,
    x: window.iconPositionX,
    y: window.iconPositionY,
    w: 1,
    h: 2
  }))
  const updatedIconLayout = iconLayout.map(item => {
    if (item.i === 'about') {
      return {
        ...item,
        x: 3,
        y: 5
      }
    }
    return item
  })
  
  
 
  return (
    <div id="app" className="app" style={themeValues.app}>
      <LoadingScreen />
      <Navbar />
      <motion.ol
        className="icons"
        animate={iconsAnimation}
        initial={{ opacity: 0, y: 8 }}
      >

        {/* {Object.entries(windows).map(([key, window]) => (
          <Icon key={key} window={window} />
        ))} */}
        <GridLayout
          className="layout"
          layout={updatedIconLayout}
          cols={12}
          rowHeight={40}
          width={1200}
        >
          {Object.entries(windows).map(([key, window]) => (
            <div key={key}>
              <Icon window={window} />
            </div>
          ))}
        </GridLayout>
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
      </motion.ol>

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
    </div>
  )
}

export default App
