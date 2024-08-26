import { CgClose } from 'react-icons/cg'
import { useTheme } from '@contexts/ThemeContext'
import { WindowProps } from '@/types'
import { ReactNode } from 'react'
import Draggable from 'react-draggable'
import { useWindows, WindowKey } from '@contexts/WindowsContext'

interface Window {
  window: WindowProps
  children: ReactNode;
}

function Window({ window, children }: Window) {
  const { openOrFocusWindow, closeWindow } = useWindows()

  const { themeValues } = useTheme()
  return (
    <Draggable
      handle='.handle'
      cancel=".close-window"
      onMouseDown={()=>openOrFocusWindow(window.elementId as WindowKey)}
    >
      <div style={{zIndex: window.zIndex }} className="absolute inset-0 z-30 m-auto max-w-fit h-fit max-h-[70vh] shadow-window-shadow">
        <div className="handle flex flex-row items-center justify-between pl-4 cursor-move backdrop-blur-[23px] mb-[-1px]" style={themeValues.window}>
          <span id="title" className='text-fs-window-title' style={{ color: themeValues.window.color }}>
            {window.caption}
          </span>
          <div>
            <a
              className="flex items-center justify-center w-[3em] text-center text-white font-black text-fs-window-title pt-2 pb-2 hover:bg-close-window-hover"
              style={themeValues.closeBtn}
              href="#"
              onClick={() => {
                closeWindow(window.elementId as WindowKey)
              }} >
              <CgClose />
            </a>
          </div>
        </div>
        <div style={themeValues.field}>
          <div>{children}</div>
        </div>
      </div>
    </Draggable>
  )
}

export default Window
