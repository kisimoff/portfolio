import { WindowProps } from '@/types'
import { useTheme } from '@contexts/ThemeContext'
import { DraggableCore } from 'react-draggable'
import { useWindows } from '@contexts/WindowsContext'

function Icon(props: { window: WindowProps }) {

  const { themeState } = useTheme()
  const { updateIconPosition } = useWindows()

  const handleDrag = (e: any, ui: any) => {
    const cellSize = 100 // Cell size is 100px
    const padding = 8 // Padding is 8px
    const newX = Math.round((ui.x - padding) / cellSize) * cellSize + padding
    const newY = Math.round((ui.y - padding) / cellSize) * cellSize + padding
    updateIconPosition(props.window.elementId, Math.floor(newX / 100), Math.floor(newY / 100))
  }

  if (props.window.elementId === 'about') {
    // console.log(props.window.iconPositionX)
    // console.log(props.window.iconPositionY)
  }
       
  return (
    <DraggableCore onStop={handleDrag}>

      <div   style={{
        gridColumnStart: props.window.iconPositionX,
        gridRowStart: props.window.iconPositionY,
      }}>
        <button
          className="iconWrapper unstyledButton"
        
          onClick={props.window.openOrFocus}
        >
          {themeState === 'dark' ? (
            <props.window.osIcon className="icon" />
          ) : (
            <img src={props.window.xpIcon} className="icon" />
          )}

          <span className="caption">
            {props.window.caption}
          </span>
        </button>
      </div>
    </DraggableCore>

  )
}

export default Icon
