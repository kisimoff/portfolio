// src/utils/terminalCommandProcessor.ts
import { Terminal } from 'xterm'
import { fs } from '@zenfs/core'

import { type ITerminalOptions } from 'xterm'
// import processDirectory from 'contexts/process/directory'



export const processCommand = (terminalString: string, terminal: Terminal): void => {
  const [prompt, command, ...args] = terminalString.trim().split(' ')
  console.log(command)
  if (!command) {
    return
  }
  switch (command) {
  case 'echo':
    terminal.write(`${args.join(' ')}\r\n`)
    break
  case 'clear':
    terminal.clear()
    break
  case 'help':
    terminal.write('Available commands: echo, clear, help, ls, mkdir, touch, rm\r\n')
    break
  case 'ls':
    try {
      const files = fs.readdirSync('/')
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
        fs.mkdirSync(`/${args[0]}`)
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
        fs.writeFileSync(`/${args[0]}`, '')
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
        fs.unlinkSync(`/${args[0]}`)
        terminal.write(`File removed: ${args[0]}\r\n`)
      } catch (error) {
        terminal.write(`Error: ${error.message}\r\n`)
      }
    }
    break
  default:
    terminal.write(`Command not found: ${command}\r\n`)
  }
}



export const config: ITerminalOptions & { cols: number; rows: number } = {
  cols: 70,
  cursorBlink: true,
  cursorInactiveStyle: 'none',
  cursorStyle: 'block',
  cursorWidth: 8,
  fontFamily: 'Ubuntu Mono, Consolas, Lucida Console, Courier New, monospace',
  fontSize: 16,
  fontWeight: '100',
  rows: 20,
  theme: {
    // background: processDirectory.Terminal.backgroundColor,
    background: '#2c0921', // Dark gray background similar to Ubuntu terminal
    foreground: '#D3D7CF', // Light gray foreground similar to Ubuntu terminal
    cursor: '#D3D7CF', // Cursor color similar to foreground
    cursorAccent: '#2E3436', // Cursor accent color
    // selection: '#555753', // Selection background color
  },
}

export const WAPM_STD_IN_APPS = ['lolcat']

export const WAPM_STD_IN_EXCLUDE_ARGS = ['--help', '-h', '--version', '-V']

export const PROMPT_CHARACTER = '>'

export const PI_ASCII = [
  '     \':lodxkkkOOOOOOOOOOOOkkkkkl',
  '  .ckKNWMMMMMMMMMMMMMMMMMMMMMMMO',
  ' .kWNK0OOKWMX0OOOOO0NMMMN000000d',
  '.dKo,.   cNWo      .xMMWo       ',
  ':x\'      cWN:      .kMMWc       ',
  '..       dMK,      \'0MMX;       ',
  '        .OMO.      ;XMM0,       ',
  '        cNMx.      cNMMk.       ',
  '       .OMMd       oMMMx.       ',
  '      .xWMWc      .xMMMd        ',
  '     .xWMMX;      .kMMMd        ',
  '    \'OWMMMO.      \'0MMMO.     :o',
  '   cKMMMMWo       \'0MMMWk;..\'l0c',
  '  ;XMMMMM0,        oWMMMMWXXNNd.',
  '  .kWMMW0;         .l0WMMMMNO:  ',
  '   .lkkl.            .cxkkd:.   ',
]

export const PRIMARY_NAME_SERVER = [
  'https://cloudflare-dns.com/dns-query',
  '1.1.1.1',
]
export const BACKUP_NAME_SERVER = ['https://dns.google/resolve', '8.8.8.8']

export const LINUX_IMAGE_PATH = '/System/linux.bin'
