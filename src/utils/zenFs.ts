// src/utils/zenFs.ts
import { configure, fs} from '@zenfs/core'
import { IndexedDB } from '@zenfs/dom'
import { IconPositions } from '@contexts/WindowsContext'

export const defaultIconPositions: IconPositions = {
  deviceInfo: { gridColumnStart: 1, gridRowStart: 1 },
  projects: { gridColumnStart: 2, gridRowStart: 1 },
  winamp: { gridColumnStart: 1, gridRowStart: 2 },
  terminal2: { gridColumnStart: 2, gridRowStart: 2 },
  about: { gridColumnStart: 1, gridRowStart: 3 },
  resume: { gridColumnStart: 2, gridRowStart: 3 },
  start: { gridColumnStart: 99, gridRowStart: 99 },
  credits: { gridColumnStart: 99, gridRowStart: 99 },
}

// Configure ZenFS with IndexedDB backend
await configure({
  mounts: {
    '/': IndexedDB,
  },
})

export const loadIconPositions = (callback: (positions:IconPositions|null) => void) => {
  try {
    if (fs.existsSync('/iconPositions.json')) {
      const data = fs.readFileSync('/iconPositions.json', 'utf-8')
      const positions = JSON.parse(data)
      callback(positions)
    } else {
      callback(null)
    }
  } catch (error) {
    console.error('Error loading icon positions:', error)
    callback(null)
  }
}

export const saveIconPositions = (positions: IconPositions) => {
  if (JSON.stringify(defaultIconPositions) == JSON.stringify(positions)
  ) {return}
  try {
    fs.writeFileSync('/iconPositions.json', JSON.stringify(positions))
  } catch (error) {
    console.error('Error saving icon positions:', error)
  }
}

export const defaultFastBootFlag = false

export const loadFastBootFlag = (callback: (flag: boolean) => void) => {
  try {
    if (fs.existsSync('/fastBootFlag.json')) {
      const data = fs.readFileSync('/fastBootFlag.json', 'utf-8')
      const flag = JSON.parse(data)
      console.log('fastboot:', flag)
      callback(flag as boolean)
    } else {
      callback(defaultFastBootFlag)
    }
  } catch (error) {
    console.error('Error loading fast boot flag:', error)
    callback(defaultFastBootFlag)
  }
}

export const saveFastBootFlag = (flag: boolean) => {
  try {
    fs.writeFileSync('/fastBootFlag.json', JSON.stringify(flag))
    console.log('fastboot saved:', flag)

  } catch (error) {
    console.error('Error saving fast boot flag:', error)
  }
}


