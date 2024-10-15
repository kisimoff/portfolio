import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

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
  windows: Record<WindowKey, WindowProps>;
  startWindow: WindowProps;
  terminalWindow: WindowProps;
  aboutWindow: WindowProps;
  deviceInfoWindow: WindowProps;
  projectsWindow: WindowProps;
  creditsWindow: WindowProps;
  openOrFocusWindow: (windowKey: WindowKey) => void;
  closeWindow: (windowKey: WindowKey) => void;
  updateIconPosition: (windowKey: WindowKey, position: IconPosition) => void;
  isPositionFree: (position: IconPosition) => boolean;
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined)

interface WindowsProviderProps {
  children: ReactNode;

}

type IconPosition = {
  gridColumnStart: number;
  gridRowStart: number;
};

export const WindowsProvider = ({ children }: WindowsProviderProps) => {

  const [openWindowsQueue, setOpenWindowsQueue] = useState<WindowKey[]>([])
  const [iconPositions, setIconPositions] = useState<Record<WindowKey, IconPosition>>({
    terminal2: { gridColumnStart: 1, gridRowStart: 1 },
    about: { gridColumnStart: 1, gridRowStart: 2 },
    deviceInfo: { gridColumnStart: 1, gridRowStart: 3 },
    projects: { gridColumnStart: 1, gridRowStart: 4 },
    start: { gridColumnStart: 1, gridRowStart: 5 },
    credits: { gridColumnStart: 1, gridRowStart: 6 },
  })

  const isPositionFree = (position: IconPosition): boolean => {
    for (const key in iconPositions) {
      if (iconPositions[key as WindowKey].gridColumnStart === position.gridColumnStart && iconPositions[key as WindowKey].gridRowStart === position.gridRowStart) {
        return false // Position is already taken
      }
    }
    return true // Position is free
  }

  // // Save the icon positions to ZenFS
  // const saveIconPositions = async (data: Record<WindowKey, IconPosition>) => {
  //   fs.writeFileSync('/iconPositions.json', JSON.stringify(data))
  //   loadIconPositions()
  // }

  // Load icon positions from ZenFS
  // const loadIconPositions = async () => {
  //   const fileExists = await fs.existsSync('/iconPositions.json')
  //   console.log(fileExists)
  //   if (fileExists) {
  //     const data = await fs.readFileSync('/iconPositions.json')
  //     const parsedData: Record<WindowKey, IconPosition> = JSON.parse(data.toString())
  //     console.log(parsedData)
  //     // setIconPositions(parsedData)
  //   }


  // }

  // Load the saved icon positions when the component mounts
  // useEffect(() => {
  //   loadIconPositions()
  // }, [])

  // Save icon positions when they change
  // useEffect(() => {
  //   saveIconPositions(iconPositions)
  // }, [iconPositions])

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
  const updateIconPosition = (windowKey: WindowKey, position: IconPosition) => {
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


  const createWindowConfig = (windowKey: WindowKey, osIcon: IconType, xpIcon: string, caption: string): WindowProps => ({
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
  }


  return (
    <WindowsContext.Provider
      value={{
        windows,
        startWindow: windows.start,
        terminalWindow: windows.terminal2,
        aboutWindow: windows.about,
        deviceInfoWindow: windows.deviceInfo,
        projectsWindow: windows.projects,
        creditsWindow: windows.credits,
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
