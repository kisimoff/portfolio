// src/components/windows/Xterm.tsx
import React, { useEffect, useRef } from 'react'
import Window from '@components/windows/Window'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import { useWindows } from '@contexts/WindowsContext'
import { processCommand, config } from '@/utils/terminalCommandProcessor'

const TerminalWindow = () => {
  const { terminalWindow } = useWindows()

  const terminalRef = useRef<HTMLDivElement>(null)
  const terminal = useRef<Terminal | null>(null)
  const fitAddon = useRef<FitAddon | null>(null)

  useEffect(() => {
    if (terminalRef.current) {


      terminal.current = new Terminal(config)
      fitAddon.current = new FitAddon()
      terminal.current.loadAddon(fitAddon.current)
      terminal.current.open(terminalRef.current)
      fitAddon.current.fit()

      terminal.current.write('Welcome to the terminal!\r\n')
      terminal.current.write('$ ')

      terminal.current.onData((data) => {
        if (data === '\r') { // Enter key
          const command = terminal.current?.buffer.active.getLine(terminal.current.buffer.active.cursorY)?.translateToString(true) || ''
          terminal.current?.write('\r\n')
          processCommand(command, terminal.current)
          terminal.current?.write('$ ')
        } else {
          terminal.current?.write(data)
        }
      })
    }

    return () => {
      if (terminal.current) {
        terminal.current.dispose()
      }
    }
  }, [])

  return (
    <Window window={terminalWindow}>
      <div ref={terminalRef} style={{ width: '100%', height: '100%' }} />
    </Window>
  )
}

export default TerminalWindow
