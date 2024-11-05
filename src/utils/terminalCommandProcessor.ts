// src/utils/terminalCommandProcessor.ts
import { Terminal } from 'xterm'
import { fs } from '@zenfs/core'

import { type ITerminalOptions } from 'xterm'
let currentDirectory = '/'
import { ClientInfo } from '@contexts/types'

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
//neofetch

const user = 'vincent'
const machine = 'HAL9000'
const ascii = `
     ##########     
   ##          ###  
 ## ##########   ## 
##            ##  ##
#             ##   #
#    ##########    #
#   ##         #   #
##  #         ##  ##
 ## ###########  ## 
   ##          ###  
     ##########     
`

export const getPrompt = (): string => {
  const homeDir = '/'
  const path = currentDirectory === homeDir ? '~' : '~' + currentDirectory.slice(1)
  return `\x1b[1;92m${user}@${machine}\x1b[0m:\x1b[1;94m${path}\x1b[0m$ `
}


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

    case 'neofetch':
      try {
        if (fs.existsSync('/tmp/clientInfo.json') && fs.statSync('/tmp/clientInfo.json').size > 0) {
          const clientInfo:ClientInfo = JSON.parse(fs.readFileSync('/tmp/clientInfo.json', 'utf-8'))
          terminal.write(`      #########       Device Type: ${clientInfo.deviceType}\r\n`)
          terminal.write(`    ##          ###   Host OS: ${clientInfo.osName} ${clientInfo.osVersion}\r\n`)
          terminal.write(`  ## ##########   ##  Browser: ${clientInfo.browserName} ${clientInfo.browserVersion}\r\n`)
          terminal.write(` ##            ##  ## GPU: ${clientInfo.gpu.slice(0,41 )}\r\n`)
          terminal.write(` #             ##   # Display: ${clientInfo.displayRes}\r\n`)
          terminal.write(` #    ##########    # CPU Cores: ${clientInfo.cpuCores}\r\n`)
          terminal.write(` #   ##         #   # IP Address: ${clientInfo.ip || 'N/A'}\r\n`)
          terminal.write(` ##  #         ##  ## Location: ${clientInfo.location || 'N/A'}\r\n`)
          terminal.write(`  ## ###########  ##  Coordinates: ${clientInfo.coordinates || 'N/A'}\r\n`)
          terminal.write(`    ##          ###   ISP: ${clientInfo.isp || 'N/A'}\r\n`)
          terminal.write('      ##########  \r\n')
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

          // terminal.write(`Device Type: ${clientInfo.deviceType}\r\n`)
          // terminal.write(`Host OS: ${clientInfo.osName} ${clientInfo.osVersion}\r\n`)
          // terminal.write(`Browser: ${clientInfo.browserName} ${clientInfo.browserVersion}\r\n`)
          // terminal.write(`GPU: ${clientInfo.gpu}\r\n`)
          // terminal.write(`Display: ${clientInfo.displayRes}\r\n`)
          // terminal.write(`CPU Cores: ${clientInfo.cpuCores}\r\n`)
          // terminal.write(`IP Address: ${clientInfo.ip || 'N/A'}\r\n`)
          // terminal.write(`Location: ${clientInfo.location || 'N/A'}\r\n`)
          // terminal.write(`Coordinates: ${clientInfo.coordinates || 'N/A'}\r\n`)
          // terminal.write(`ISP: ${clientInfo.isp || 'N/A'}\r\n`)

          // terminal.write('       #########     \r\n')
          // terminal.write('     ##          ###  \r\n')
          // terminal.write('   ## ##########   ## \r\n')
          // terminal.write('  ##            ##  ##\r\n')
          // terminal.write('  #             ##   #\r\n')
          // terminal.write('  #    ##########    #\r\n')
          // terminal.write('  #   ##         #   #\r\n')
          // terminal.write('  ##  #         ##  ##\r\n')
          // terminal.write('   ## ###########  ## \r\n')
          // terminal.write('     ##          ###  \r\n')
          // terminal.write('       ##########  \r\n')
          terminal.paste(ascii)

      //       #########     
      //     ##          ###  
      //   ## ##########   ## 
      //  ##            ##  ##
      //  #             ##   #
      //  #    ##########    #
      //  #   ##         #   #
      //  ##  #         ##  ##
      //   ## ###########  ## 
      //     ##          ###  
      //       ##########  

          

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

// const colorAsciiArt = (ascii: string): string => {
//   const lines = ascii.split('\n')
//   const coloredLines = lines.map((line, index) => {
//     const halfLength = Math.floor(line.length / 2)
//     const leftSide = line.slice(0, halfLength)
//     const rightSide = line.slice(halfLength)

//     // Define the colors
//     const redColor = '\x1b[31m' // Red color
//     const tealColor = '\x1b[36m' // Light teal color
//     const resetColor = '\x1b[0m' // Reset color

//     // Apply the colors
//     const coloredLine = `${redColor}${leftSide}${resetColor}${tealColor}${rightSide}${resetColor}`
//     terminal.write(coloredLine)
//   })

//   return coloredLines.join('\n')
// }


export const config: ITerminalOptions & { cols: number; rows: number } = {
  cols: 70,
  lineHeight: 1.3,
  letterSpacing: 1.23,
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

