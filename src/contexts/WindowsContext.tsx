import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
// import * as BrowserFS from 'browserfs'

import mycomp from '@assets/icons/xp/mycomp.png'
import info from '@assets/icons/xp/about.png'
import cmd from '@assets/icons/xp/cmd.png'
import mydocs from '@assets/icons/xp/mydocs.png'
import textDoc from '@assets/icons/xp/text-doc.png'
import winampDark from '@assets/icons/xp/winamp-dark.png'
import winampXp from '@assets/icons/xp/winamp-xp.png'


import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { BsJournalCode, BsTerminal, BsPersonCircle } from 'react-icons/bs'
import { WindowProps } from '@/types'
import { IconType } from 'react-icons'
// import { configureBrowserFS, loadIconPositions, saveIconPositions } from '@/utils/browserFs'
import { loadIconPositions, saveIconPositions, defaultIconPositions } from '@/utils/zenFs'


export type WindowKey = 'terminal2' | 'about' | 'deviceInfo' | 'projects' | 'start' | 'credits' | 'winamp' | 'resume'

interface WindowsContextType {
  windows: Record<WindowKey, WindowProps>;
  startWindow: WindowProps;
  terminalWindow: WindowProps;
  aboutWindow: WindowProps;
  deviceInfoWindow: WindowProps;
  projectsWindow: WindowProps;
  creditsWindow: WindowProps;
  winampWindow: WindowProps;
  resumeWindow: WindowProps;
  openOrFocusWindow: (windowKey: WindowKey) => void;
  closeWindow: (windowKey: WindowKey) => void;
  updateIconPosition: (windowKey: WindowKey, position: IconCoordinates) => void;
  isPositionFree: (position: IconCoordinates) => boolean;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined)

interface WindowsProviderProps {
  children: ReactNode;

}

type IconCoordinates = {
  gridColumnStart: number;
  gridRowStart: number;
};

export type IconPositions = Record<WindowKey, IconCoordinates>


export const WindowsProvider = ({ children }: WindowsProviderProps) => {

  const [openWindowsQueue, setOpenWindowsQueue] = useState<WindowKey[]>([])
  const [iconPositions, setIconPositions] = useState<IconPositions>(defaultIconPositions)

  const isPositionFree = (position: IconCoordinates): boolean => {
    for (const key in iconPositions) {
      if (iconPositions[key as WindowKey].gridColumnStart === position.gridColumnStart && iconPositions[key as WindowKey].gridRowStart === position.gridRowStart) {
        return false // Position is already taken
      }
    }
    return true // Position is free
  }

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


  const updateIconPosition = (windowKey: WindowKey, position: IconCoordinates) => {
    if (position.gridColumnStart < 1 || position.gridRowStart < 1) {
      return
    }
    setIconPositions(prevPositions => ({
      ...prevPositions,
      [windowKey]: position
    }))
  }


  const closeWindow = (windowKey: WindowKey) => {
    setOpenWindowsQueue(prevWindows => prevWindows.filter(key => key !== windowKey))
  }



  const createWindowConfig = (windowKey: WindowKey, osIcon: IconType | string, xpIcon: string, caption: string): WindowProps => ({
    osIcon,
    xpIcon,
    caption,
    elementId: windowKey,
    close: () => closeWindow(windowKey),
    openOrFocus: () => openOrFocusWindow(windowKey),
    // setVisibility: () => setOpenWindowsQueue(prevWindows => [...prevWindows, windowKey]),
    visibility: openWindowsQueue?.includes(windowKey) ?? false,
    zIndex: (openWindowsQueue.indexOf(windowKey) + 5),
    gridColumnStart: iconPositions[windowKey].gridColumnStart,
    gridRowStart: iconPositions[windowKey].gridRowStart
  })

  const windows = {
    start: createWindowConfig('start', BsTerminal, cmd, 'Start'),
    terminal2: createWindowConfig('terminal2', BsTerminal, cmd, 'Terminal'),
    about: createWindowConfig('about', BsPersonCircle, info, 'About'),
    deviceInfo: createWindowConfig('deviceInfo', TbDeviceDesktopAnalytics, mycomp, 'Device'),
    projects: createWindowConfig('projects', BsJournalCode, mydocs, 'Projects'),
    credits: createWindowConfig('credits', BsJournalCode, mydocs, 'Credits'),
    winamp: createWindowConfig('winamp', winampDark, winampXp, 'Winamp'),
    resume: createWindowConfig('resume', BsJournalCode, textDoc, 'Resume'),
  }

  useEffect(() => {
    loadIconPositions((positions) => {
      if (positions) {
        setIconPositions(positions)
      }
    })
  }, [])

  useEffect(() => {
    saveIconPositions(iconPositions)
  }, [iconPositions])

  return (
    <WindowsContext.Provider
      value={{
        windows,
        resumeWindow: windows.resume,
        startWindow: windows.start,
        terminalWindow: windows.terminal2,
        aboutWindow: windows.about,
        deviceInfoWindow: windows.deviceInfo,
        projectsWindow: windows.projects,
        creditsWindow: windows.credits,
        winampWindow: windows.winamp,
        openOrFocusWindow,
        closeWindow,
        updateIconPosition,
        isPositionFree
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
