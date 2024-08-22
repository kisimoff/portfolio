import { createContext, useContext, useState, ReactNode } from 'react'

import mycomp from '@assets/icons/xp/mycomp.png'
import info from '@assets/icons/xp/about.png'
import cmd from '@assets/icons/xp/cmd.png'
import mydocs from '@assets/icons/xp/mydocs.png'

import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { BsJournalCode, BsTerminal, BsPersonCircle } from 'react-icons/bs'
import { WindowProps } from '@/types'

type IconKeys = 'terminal2' | 'about' | 'deviceInfo' | 'projects' | 'start' | 'credits'

interface WindowsContextType {
  iconsConfig: Record<IconKeys, WindowProps>;
  startWindow: WindowProps;
  terminalWindow: WindowProps;
  aboutWindow: WindowProps;
  deviceInfoWindow: WindowProps;
  projectsWindow: WindowProps;
  creditsWindow: WindowProps;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined)

interface WindowsProviderProps {
  children: ReactNode;
}

export const WindowsProvider = ({ children }: WindowsProviderProps) => {
  const [about, setAbout] = useState(false)
  const [start, setStart] = useState(false)
  const [device, setDevice] = useState(false)
  const [projects, setProjects] = useState(false)
  const [terminal2, setTerminal2] = useState(false)
  const [credits, setCredits] = useState(false)


  const iconsConfig = {
    start: {
      osIcon: BsTerminal,
      xpIcon: cmd,
      caption: 'Start',
      elementId: 'start',
      setVisibility: setStart,
      visibility: start,
    },
    terminal2: {
      osIcon: BsTerminal,
      xpIcon: cmd,
      caption: 'Terminal',
      elementId: 'terminal2',
      setVisibility: setTerminal2,
      visibility: terminal2,
    },
    about: {
      osIcon: BsPersonCircle,
      caption: 'About',
      xpIcon: info,
      elementId: 'about',
      setVisibility: setAbout,
      visibility: about,
    },
    deviceInfo: {
      osIcon: TbDeviceDesktopAnalytics,
      caption: 'Device',
      xpIcon: mycomp,
      elementId: 'deviceInfo',
      setVisibility: setDevice,
      visibility: device,
    },
    projects: {
      osIcon: BsJournalCode,
      caption: 'Projects',
      xpIcon: mydocs,
      elementId: 'projects',
      setVisibility: setProjects,
      visibility: projects,
    },
    credits: {
      osIcon: BsJournalCode,
      caption: 'Credits',
      xpIcon: mydocs,
      elementId: 'credits',
      setVisibility: setCredits,
      visibility: credits,
    },
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
        creditsWindow: iconsConfig.credits
      }}
    >
      {children}
    </WindowsContext.Provider>
  )
}

// Create a custom hook to use the windows visibility context
// eslint-disable-next-line react-refresh/only-export-components
export const useWindows = () => {
  const context = useContext(WindowsContext)
  if (context === undefined) {
    throw new Error('useWindows must be used within a WindowsProvider')
  }
  return context
}
