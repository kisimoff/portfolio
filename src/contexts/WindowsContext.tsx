import { createContext, useContext, useState, ReactNode } from 'react'

// Define the windows visibility context type
interface WindowsContextType {
  about: boolean;
  setAbout: React.Dispatch<React.SetStateAction<boolean>>;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  device: boolean;
  setDevice: React.Dispatch<React.SetStateAction<boolean>>;
  projects: boolean;
  setProjects: React.Dispatch<React.SetStateAction<boolean>>;
  terminal2: boolean;
  setTerminal2: React.Dispatch<React.SetStateAction<boolean>>;
  credits: boolean;
  setCredits: React.Dispatch<React.SetStateAction<boolean>>;
  // Add more windows visibility state here
}

// Create the windows visibility context
const WindowsContext = createContext<WindowsContextType | undefined>(undefined)

// Create a windows visibility provider component
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

  return (
    <WindowsContext.Provider value={{ about, setAbout, start, setStart, device, setDevice, projects, setProjects, terminal2, setTerminal2, credits, setCredits }}>
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
