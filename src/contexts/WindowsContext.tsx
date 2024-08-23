import { createContext, useContext, useState, ReactNode } from 'react'

import mycomp from '@assets/icons/xp/mycomp.png'
import info from '@assets/icons/xp/about.png'
import cmd from '@assets/icons/xp/cmd.png'
import mydocs from '@assets/icons/xp/mydocs.png'

import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { BsJournalCode, BsTerminal, BsPersonCircle } from 'react-icons/bs'
import { WindowProps } from '@/types'
import { IconType } from 'react-icons'

export type WindowKey = 'terminal2' | 'about' | 'deviceInfo' | 'projects' | 'start' | 'credits'

interface WindowsContextType {
  iconsConfig: Record<WindowKey, WindowProps>;
  startWindow: WindowProps;
  terminalWindow: WindowProps;
  aboutWindow: WindowProps;
  deviceInfoWindow: WindowProps;
  projectsWindow: WindowProps;
  creditsWindow: WindowProps;
increaseZIndex: (windowKey: WindowKey) => void;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined)

interface WindowsProviderProps {
  children: ReactNode;
}

export const WindowsProvider = ({ children }: WindowsProviderProps) => {

  const defaultZIndex = 4
  // const [about, setAbout] = useState(false)
  // const [start, setStart] = useState(false)
  // const [device, setDevice] = useState(false)
  // const [projects, setProjects] = useState(false)
  // const [terminal2, setTerminal2] = useState(false)
  // const [credits, setCredits] = useState(false)

  const [openWindows, setOpenWindows] = useState<WindowKey[]>([])
  const [zIndexes, setZIndexes] = useState<Record<WindowKey, number>>({})

  const createWindowConfig = (windowKey: WindowKey, osIcon: IconType, xpIcon: string, caption: string): WindowProps => ({
    osIcon,
    xpIcon,
    caption,
    elementId: windowKey,
    setVisibility: () => setOpenWindows(prevWindows => [...prevWindows, windowKey]),
    visibility: openWindows?.includes(windowKey) ?? false,
    zIndex: zIndexes[windowKey] || defaultZIndex,
  })

  const iconsConfig = {
    start: createWindowConfig('start', BsTerminal, cmd, 'Start'),
    terminal2: createWindowConfig('terminal2', BsTerminal, cmd, 'Terminal'),
    about: createWindowConfig('about', BsPersonCircle, info, 'About'),
    deviceInfo: createWindowConfig('deviceInfo', TbDeviceDesktopAnalytics, mycomp, 'Device'),
    projects: createWindowConfig('projects', BsJournalCode, mydocs, 'Projects'),
    credits: createWindowConfig('credits', BsJournalCode, mydocs, 'Credits'),
  }

  const increaseZIndex = (windowKey: WindowKey) => {
    //TODO: Figure out how to dyanamically increase the z-index once clicked or focused.
    console.log('increase index')
    setZIndexes(prevZIndexes => ({
      ...prevZIndexes,
      [windowKey]: (prevZIndexes[windowKey] || defaultZIndex) + 1,
    }))
  }
  
  return (
    <WindowsContext.Provider
      value={{
        iconsConfig,
        startWindow: iconsConfig.start,
        terminalWindow: iconsConfig.terminal2,
        aboutWindow: iconsConfig.about,
        deviceInfoWindow: iconsConfig.deviceInfo,
        projectsWindow: iconsConfig.projects,
        creditsWindow: iconsConfig.credits,
        increaseZIndex
        // windowQueue,
        // bringWindowToFront,
      }}
    >
      {children}
    </WindowsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWindows = () => {
  const context = useContext(WindowsContext)
  if (context === undefined) {
    throw new Error('useWindows must be used within a WindowsProvider')
  }
  return context
}
