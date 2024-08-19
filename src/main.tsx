import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@contexts/ThemeContext.tsx'
import { AnimationsProvider } from '@contexts/AnimationsContext.tsx'
import {  WindowsProvider } from '@contexts/WindowsContext.tsx'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <WindowsProvider>
    <AnimationsProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AnimationsProvider>
  </WindowsProvider>

)
