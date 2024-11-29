import { createContext, useContext, useState, ReactNode } from 'react'
import xpWallpaper from '@assets/xpCompress.jpg'

// Define the theme types
type Theme = 'xp' | 'dark';

// Define the theme values
const xpTheme = {
  app: {
    backgroundImage: `url(${xpWallpaper})`,
    backgroundSize: 'cover',
    // transition: "none",
  },
  button: {
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'border-box',
    border: '1px solid #003c74',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(236, 235, 229, 1) 86%, rgba(216, 208, 196, 1) 100%)',
    boxShadow: 'none',
    borderRadius: '3px',
    ':not(:disabled)': {
      ':active': {
        boxShadow: 'none',
        background: 'linear-gradient(180deg, rgba(205, 202, 195, 1) 0%, rgba(227, 227, 219, 1) 8%, rgba(229, 229, 222, 1) 94%, rgba(242, 242, 241, 1) 100%)'
      },
      ':hover': {
        boxShadow: 'inset -1px 1px #fff0cf, inset 1px 2px #fdd889, inset -2px 2px #fbc761, inset 2px -2px #e5a01a'
      }
    },
    ':focus': {
      boxShadow: 'inset -1px 1px #cee7ff, inset 1px 2px #98b8ea, inset -2px 2px #bcd4f6, inset 1px -1px #89ade4, inset 2px -2px #89ade4'
    },
    '::-moz-focus-inner': {
      border: '0'
    }
  },
  window: {
    // background: "rgb(19,60,156)",
    background:
      'linear-gradient(0deg, rgba(0,59,214,1) 2%, rgba(0,102,253,1) 15%, rgba(0,100,253,1) 20%, rgba(0,88,230,1) 85%, rgba(54,143,252,1) 95%, rgba(13,96,232,1) 98%)',
    color: '#E3E3E3',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    transition: 'all 0.5s ease-in',
    fontFamily: 'Segoe UI',
    fontWeight: '600',
    textShadow: '1px 2px 2px rgba(0, 0, 0, 0.4)',
    boxShadow: 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
  },
  iconTask: {
    // backgroundColor: "#ffffff",
    paddingRight: '1rem',
    borderBottom: 'none',
    borderRadius: '4px',
    boxShadow: '1px 2px 2px #33333375',
    borderLeft: '1px solid rgba(146, 165, 187, 0.56)',
    background:
      'linear-gradient(0deg, rgba(97,167,240,1) 0%, rgba(48,137,241,1) 6%, rgba(48,137,241,1) 93%, rgba(52,135,241,1) 97%, rgba(97,167,240,1) 100%)',
  },
  iconTaskCaption: {
    paddingRight: '1.5rem',
    fontSize: '1.1rem',
  },
  field: {
    backgroundColor: '#E3E3E3',
    color: '#474554',
    fontWeight: 'normal',
    boxShadow: '0 2px 5px #33333375',
    boxSizing: 'border-box',
    borderRight: '4px solid #003bd6',
    borderBottom: '4px solid #003bd6',
    borderLeft: '4px solid #003bd6',
    transition: 'all 0.5s ',
  },
  // cursor: { animation: "1.02s blink-light step-end infinite" },
  closeBtn: {
    color: 'white',
    backgroundColor: '#ee6247',
    height: '1.5rem',
    width: '1.5rem',
    margin: '0.4rem',
    border: '2px solid #ffffff85',
    borderRadius: '4px',
    fontSize: '1.3rem',
    transition: 'all 0.8s ease-in',
  },
  navbar: {
    background:
      'linear-gradient(0deg, rgba(23,65,163,1) 0%, rgba(34,88,214,1) 9%, rgba(35,99,223,1) 22%, rgba(34,88,214,1) 82%, rgba(54,120,206,1) 93%, rgba(34,88,214,1) 100%)',
    transition: 'all 1.5s ease',
  },
}

const darkTheme = {
  window: {
    backgroundColor: '#cfcfcf46',
    color: 'white',
  },

  field: {
    color: '#F4F4F4',
    fontWeight: 'normal',
    backgroundColor: '#0f0e0ff3',
    boxSizing: 'border-box',
    boxShadow: '0 2px 5px #111',
    transition: 'all 0.2s ',
  },
  // cursor: { animation: "1.02s blink-dark step-end infinite" },
  closeBtn: {
    color: 'white',
    borderRadius: '0px',
    border: '0px',
  },
}

interface ThemeContextType {
  themeState: Theme;
  toggleTheme: () => void;
  themeValues: any
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setTheme(theme === 'xp' ? 'dark' : 'xp')
  }

  const themeValues = theme === 'xp' ? xpTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ themeState: theme, toggleTheme, themeValues }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}