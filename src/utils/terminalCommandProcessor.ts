// src/utils/terminalCommandProcessor.ts
import { Terminal } from 'xterm'
import { fs } from '@zenfs/core'

import { type ITerminalOptions } from 'xterm'
// import processDirectory from 'contexts/process/directory'
let currentDirectory = '/'

const user = 'vincent'
const machine = 'HAL9000'


export const getPrompt = (): string => {
  const homeDir = '/'
  const path = currentDirectory === homeDir ? '~' : '~' + currentDirectory.slice(1)
  return `\x1b[1;92m${user}@${machine}\x1b[0m:\x1b[1;94m${path}\x1b[0m$ `
}

//investigate a bug after cat terminal stops to update for some rason

export const processCommand = (terminalString: string, terminal: Terminal): void => {
  const [ command, ...args] = terminalString.trim().split(' ')
  if (!command) {
    return
  }
  switch (command) {
  case 'echo':
    terminal.write(`${args.join(' ')}\r\n`)
    break
  case 'cls':
  case 'clear':
    terminal.clear()
    break
  case 'help':
    terminal.write('Available commands: echo, clear, help, ls, mkdir, touch, rm, cd, pwd, cat\r\n')
    break
  case 'ls':
    try {
      const files = fs.readdirSync(currentDirectory)
      files.forEach(file => terminal.write(`${file}\r\n`))
    } catch (error) {
      terminal.write(`Error: ${error.message}\r\n`)
    }
    break
  case 'mkdir':
    if (args.length === 0) {
      terminal.write('Usage: mkdir <directory>\r\n')
    } else {
      try {
        fs.mkdirSync(`${currentDirectory}/${args[0]}`)
        terminal.write(`Directory created: ${args[0]}\r\n`)
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
    }
    break
  case 'touch':
    if (args.length === 0) {
      terminal.write('Usage: touch <file>\r\n')
    } else {
      try {
        fs.writeFileSync(`${currentDirectory}/${args[0]}`, '')
        terminal.write(`File created: ${args[0]}\r\n`)
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
    }
    break
  case 'rm':
    if (args.length === 0) {
      terminal.write('Usage: rm <file>\r\n')
    } else {
      try {
        fs.unlinkSync(`${currentDirectory}/${args[0]}`)
        terminal.write(`File removed: ${args[0]}\r\n`)
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
    }
    break
  case 'cd':
    if (args.length === 0) {
      currentDirectory = '/'
    } else {
      const newDirectory = args[0] === '..' ? currentDirectory.split('/').slice(0, -1).join('/') || '/' : `${currentDirectory}/${args[0]}`
      try {
        if (fs.statSync(newDirectory).isDirectory()) {
          currentDirectory = newDirectory
        } else {
          terminal.write(`${args[0]} is not a directory\r\n`)
        }
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
    }
    break
  case 'pwd':
    terminal.write(`${currentDirectory}\r\n`)
    break
  case 'cat':
    if (args.length === 0) {
      terminal.write('Usage: cat <file>\r\n')
    } else {
      try {
        const content = fs.readFileSync(`${currentDirectory}/${args[0]}`, 'utf-8')
        terminal.write(`${content} \r\n`)
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
    }
    break
  default:
    terminal.write(`${command}: command not found \r\n`)
  }
}



export const config: ITerminalOptions & { cols: number; rows: number } = {
  cols: 70,
  lineHeight: 1.3,
  cursorBlink: true,
  cursorInactiveStyle: 'none',
  cursorStyle: 'block',
  cursorWidth: 8,
  fontFamily: 'Ubuntu Mono, Consolas, Lucida Console, Courier New, monospace',
  fontSize: 16,
  fontWeight: '100',
  rows: 15,
  theme: {
    background: '#2c0921', // Dark gray background similar to Ubuntu terminal
    foreground: '#D3D7CF', // Light gray foreground similar to Ubuntu terminal
    cursor: '#D3D7CF', // Cursor color similar to foreground
    cursorAccent: '#2E3436', // Cursor accent color
  },
}
