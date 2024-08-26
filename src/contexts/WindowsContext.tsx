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
  openOrFocusWindow: (windowKey: WindowKey) => void;
  closeWindow: (windowKey: WindowKey) => void;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined)

interface WindowsProviderProps {
  children: ReactNode;
}

export const WindowsProvider = ({ children }: WindowsProviderProps) => {

  const [openWindowsQueue, setOpenWindowsQueue] = useState<WindowKey[]>([])

  const openOrFocusWindow = (windowKey: WindowKey) => {
    setOpenWindowsQueue(prevWindows => {
      const newOrder = [...prevWindows]
      const index = newOrder.indexOf(windowKey)
      if (index !== -1) {
        newOrder.splice(index, 1)
      }
      newOrder.push(windowKey)
      return newOrder
    })
  }

  const closeWindow = (windowKey: WindowKey) => {
    setOpenWindowsQueue(prevWindows => prevWindows.filter(key => key !== windowKey))
  }

  
  const createWindowConfig = (windowKey: WindowKey, osIcon: IconType, xpIcon: string, caption: string): WindowProps => ({
    osIcon,
    xpIcon,
    caption,
    elementId: windowKey,
    setVisibility: () => setOpenWindowsQueue(prevWindows => [...prevWindows, windowKey]),
    visibility: openWindowsQueue?.includes(windowKey) ?? false,
    zIndex: (openWindowsQueue.indexOf(windowKey) + 5)
  })

  const iconsConfig = {
    start: createWindowConfig('start', BsTerminal, cmd, 'Start'),
    terminal2: createWindowConfig('terminal2', BsTerminal, cmd, 'Terminal'),
    about: createWindowConfig('about', BsPersonCircle, info, 'About'),
    deviceInfo: createWindowConfig('deviceInfo', TbDeviceDesktopAnalytics, mycomp, 'Device'),
    projects: createWindowConfig('projects', BsJournalCode, mydocs, 'Projects'),
    credits: createWindowConfig('credits', BsJournalCode, mydocs, 'Credits'),
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
        openOrFocusWindow,
        closeWindow
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
