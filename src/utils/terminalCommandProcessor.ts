// src/utils/terminalCommandProcessor.ts
import { Terminal } from 'xterm'
import { fs } from '@zenfs/core'

import { type ITerminalOptions } from 'xterm'
let currentDirectory = '/'
import { ClientInfo } from '@contexts/types'
import { isMobile } from 'react-device-detect'
import { saveFastBootFlag } from '@/utils/zenFs'

// Make user and machine configurable and save them in a file like bashrc or something this could
// potentiallye evolve to a settings menu.

//ipconfig -> get ip
//mv and cp
//code / nano
//whoami
//date
//history + up and down
//tail / head
//htop

const user = 'vincent'
const machine = 'HAL9000'


export const getPrompt = (): string => {
  const homeDir = '/'
  const path = currentDirectory === homeDir ? '~' : '~' + currentDirectory.slice(1)
  return `\x1b[1;92m${user}@${machine}\x1b[0m:\x1b[1;94m${path}\x1b[0m$ `
}
const commandList = [
  { commands: ['echo'], description: 'Display a line of text' },
  { commands: ['clear', 'cls'], description: 'Clear the terminal screen' },
  { commands: ['help'], description: 'Display this help message' },
  { commands: ['ls'], description: 'List files and directories' },
  { commands: ['mkdir'], description: 'Create a new directory' },
  { commands: ['touch'], description: 'Create a new file' },
  { commands: ['rm'], description: 'Remove a file' },
  { commands: ['cd'], description: 'Change the current directory' },
  { commands: ['pwd'], description: 'Print working directory' },
  { commands: ['cat', 'less'], description: 'Display file contents' },
  { commands: ['fastboot'], description: 'Enable or disable fast boot' },
  { commands: ['restart'], description: 'Restart the terminal' },
  { commands: ['neofetch'], description: 'Display system information' },
  {
    commands: ['ipconfig', 'ifconfig', 'deviceInfo', 'deviceinfo'],
    description: 'Display device information',
  },
]

export const processCommand = (terminalString: string, terminal: Terminal): void => {
  const [ command, ...args] = terminalString.trim().split(' ')
  if (!command) {
    return
  }
  switch (command) {
    case 'help':
      terminal.write('Available commands:\r\n')
      commandList.forEach((item) => {
        const cmds = item.commands.join(', ')
        terminal.write(`  ${cmds} - ${item.description}\r\n`)
      })
      break
  case 'echo':
    terminal.write(`${args.join(' ')}\r\n`)
    break
  case 'cls':
  case 'clear':
    terminal.clear()
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
  case 'less':
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
    case 'fastboot':
      if (args[0] === 'on') {
        saveFastBootFlag(true)
        terminal.write('Fastboot enabled\r\n')
      } else if (args[0] === 'off') {
        saveFastBootFlag(false)
        terminal.write('Fastboot disabled\r\n')
        terminal.write('Execute restart or refresh the page to see the loading screen\r\n')

      } else {
        terminal.write('Usage: fastboot [on|off]\r\n')
      }
      break

    case 'restart':
      case 'refresh':
  if (typeof window !== 'undefined' && window.location) {
    window.location.reload()
  }
  break
    case 'neofetch':
      try {
        if (fs.existsSync('/tmp/clientInfo.json') && fs.statSync('/tmp/clientInfo.json').size > 0) {
          const clientInfo:ClientInfo = JSON.parse(fs.readFileSync('/tmp/clientInfo.json', 'utf-8'))
                    const deviceWidth = parseInt(clientInfo.displayRes.split(' ')[0], 10)

          if (deviceWidth < 500) {
            processCommand('deviceinfo', terminal)
            break
          };
          const colorsA = [
            '\x1b[40m \x1b[0m', // Black
            '\x1b[41m \x1b[0m', // Red
            '\x1b[42m \x1b[0m', // Green
            '\x1b[43m \x1b[0m', // Yellow
            '\x1b[44m \x1b[0m', // Blue
            '\x1b[45m \x1b[0m', // Magenta
            '\x1b[46m \x1b[0m', // Cyan
            '\x1b[47m \x1b[0m', // White

          ]

          const colorsB = [
            '\x1b[100m \x1b[0m', // Bright Black
            '\x1b[101m \x1b[0m', // Bright Red
            '\x1b[102m \x1b[0m', // Bright Green
            '\x1b[103m \x1b[0m', // Bright Yellow
            '\x1b[104m \x1b[0m', // Bright Blue
            '\x1b[105m \x1b[0m', // Bright Magenta
            '\x1b[106m \x1b[0m', // Bright Cyan
            '\x1b[107m \x1b[0m', // Bright White
          ]
          terminal.write(`     #########       \x1b[1;31mOS:\x1b[0m ${clientInfo.osName} ${clientInfo.osVersion}\r\n`)
          terminal.write(`   ##          ###   \x1b[1;31mDevice Type:\x1b[0m ${clientInfo.deviceType}\r\n`)
          terminal.write(` ## ##########   ##  \x1b[1;31mBrowser:\x1b[0m ${clientInfo.browserName} ${clientInfo.browserVersion}\r\n`)
          terminal.write(`##            ##  ## \x1b[1;31mLocation:\x1b[0m ${clientInfo.location || 'N/A'}\r\n` )
          terminal.write(`#             ##   # \x1b[1;31mCoordinates:\x1b[0m ${clientInfo.coordinates || 'N/A'}\r\n`)
          terminal.write(`#    ##########    # \x1b[1;31mResolution:\x1b[0m ${clientInfo.displayRes}\r\n`)
          terminal.write(`#   ##         #   # \x1b[1;31mIP Address:\x1b[0m ${clientInfo.ip || 'N/A'}\r\n`)
          terminal.write(`##  #         ##  ## \x1b[1;31mCPU Cores:\x1b[0m ${clientInfo.cpuCores}\r\n`)
          terminal.write(` ## ###########  ##  \x1b[1;31mGPU:\x1b[0m ${clientInfo.gpu.slice(0,41 )}\r\n` )
          terminal.write(`   ##          ###   \x1b[1;31mISP:\x1b[0m ${clientInfo.isp || 'N/A'}\r\n`)
          terminal.write('     ##########      ')
          colorsA.forEach(function(color){
            terminal.write(color + color + color)
          })
          terminal.write('\r\n')

          terminal.write('                     ')
          colorsB.forEach(function(color){
            terminal.write(color + color + color)
          })
          terminal.write('\r\n')
        } else {
          terminal.write('Error: Client information not available\r\n')
        }
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
          break
    case 'ipconfig':
      case 'ifconfig':
        case 'deviceInfo':
          case 'deviceinfo':

      try {
        if (fs.existsSync('/tmp/clientInfo.json') && fs.statSync('/tmp/clientInfo.json').size > 0) {
          const clientInfo:ClientInfo = JSON.parse(fs.readFileSync('/tmp/clientInfo.json', 'utf-8'))
          terminal.write(`Device Type: ${clientInfo.deviceType}\r\n`)
          terminal.write(`Host OS: ${clientInfo.osName} ${clientInfo.osVersion}\r\n`)
          terminal.write(`Browser: ${clientInfo.browserName} ${clientInfo.browserVersion}\r\n`)
          terminal.write(`GPU: ${clientInfo.gpu}\r\n`)
          terminal.write(`Display: ${clientInfo.displayRes}\r\n`)
          terminal.write(`CPU Cores: ${clientInfo.cpuCores}\r\n`)
          terminal.write(`IP Address: ${clientInfo.ip || 'N/A'}\r\n`)
          terminal.write(`Location: ${clientInfo.location || 'N/A'}\r\n`)
          terminal.write(`Coordinates: ${clientInfo.coordinates || 'N/A'}\r\n`)
          terminal.write(`ISP: ${clientInfo.isp || 'N/A'}\r\n`)

        } else {
          terminal.write('Error: Client information not available\r\n')
        }
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
      break
  default:
    terminal.write(`${command}: command not found \r\n`)
  }
}



export const config: ITerminalOptions & { cols: number; rows: number } = {
  cols: 70,
  lineHeight: 1.3,
  letterSpacing: 1.3,
  cursorBlink: true,
  cursorInactiveStyle: 'none',
  cursorStyle: 'block',
  cursorWidth: 8,
  fontFamily: 'Ubuntu Mono, Consolas, Lucida Console, Courier New, monospace',
  fontSize: 16,
  fontWeight: '100',
  rows: 15,
  theme: {
    background: '#2c0921', 
    foreground: '#D3D7CF',
    cursor: '#D3D7CF', 
    cursorAccent: '#2E3436', 
  },
}

