// src/components/windows/Xterm.tsx
import React, { useEffect, useRef } from 'react'
import Window from '@components/windows/Window'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import { useWindows } from '@contexts/WindowsContext'
import { processCommand, config, getPrompt } from '@/utils/terminalCommandProcessor'

// Make them configurable and save them in a file like bashrc or something this could
// potentiallye evolve to a settings menu.

const TerminalWindow = () => {
  const { terminalWindow } = useWindows()

  const terminalRef = useRef<HTMLDivElement>(null)
  const terminal = useRef<Terminal | null>(null)
  const fitAddon = useRef<FitAddon | null>(null)

  const initializeTerminal = () => {
    if (terminalRef.current) {
      terminal.current = new Terminal(config)
      fitAddon.current = new FitAddon()
      terminal.current.loadAddon(fitAddon.current)
      terminal.current.open(terminalRef.current)
      fitAddon.current.fit()

      terminal.current.write(getPrompt())

      terminal.current.onData(handleTerminalData)
    }
  }

  let inputBuffer = '' // Track user input

  const handleTerminalData = (data: string) => {
    if (data === '\r') { // Enter key
      const command = inputBuffer
      terminal.current?.write('\r\n')
      if (terminal.current) {
        processCommand(command, terminal.current)
      }
      inputBuffer = '' // Clear buffer after processing
      terminal.current?.write(getPrompt())
    } else if (data === '\x7f') { // Backspace key
      if (inputBuffer.length > 0) {
        inputBuffer = inputBuffer.slice(0, -1) // Remove last character
        terminal.current?.write('\b \b')
      }
    } else {
      inputBuffer += data // Add typed character to the buffer
      terminal.current?.write(data) // Display in terminal
    }
  }

  useEffect(() => {
    initializeTerminal()

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

