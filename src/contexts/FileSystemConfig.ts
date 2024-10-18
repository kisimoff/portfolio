import { type FileSystemConfiguration } from 'browserfs'


const FileSystemConfig = (): FileSystemConfiguration => ({
  fs: 'MountableFileSystem',
  options: {
    '/': {
      fs: 'OverlayFS',
      options: {
        readable: {
          fs: 'HTTPRequest',
        },
        writable: {
          fs: 'IndexedDB',
        },
      },
    },
  },
})

export default FileSystemConfig
