import { WindowProps } from '@/types'
import { useTheme } from '@contexts/ThemeContext'
import { DraggableCore } from 'react-draggable'
import { useWindows } from '@contexts/WindowsContext'
import { useCallback, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
type DragPosition = {
  x?: number;
  y?: number;
};

type IconPosition = {
  gridColumnStart: number;
  gridRowStart: number;
};


function Icon(props: { window: WindowProps }) {
  const dragAnimation = useAnimation()
  const placeholderAnimation = useAnimation()

  const { themeState } = useTheme()
  const { updateIconPosition } = useWindows()
  
  const gridElementRef = useRef<HTMLDivElement | null>(null)
  
  const [isDragging, setIsDragging] = useState(false)
  const [preventClick, setPreventClick] = useState(false)
  const [placeholderPosition, setPlaceholderPosition] = useState<IconPosition | null>(null)

  const calcGridDropPosition = useCallback((
    gridElement: HTMLElement | null,
    { x = 0, y = 0 }: DragPosition
  ): IconPosition => {
    if (!gridElement) return { gridColumnStart: 0, gridRowStart: 0 }

    const gridRowHeight = 100
    const gridColumnWidth = 100
    const gridColumnGap = 0
    const gridRowGap = 0
    const paddingTop = 8

    return {
      gridColumnStart: Math.min(
        Math.ceil(x / (gridColumnWidth + gridColumnGap)),
      ),
      gridRowStart: Math.min(
        Math.ceil((y - paddingTop) / (gridRowHeight + gridRowGap)),
      ),
    }
  }, [])


  const handleClick = () => {
    if (preventClick){
      return
    }
    props.window.openOrFocus()
  }


  async function handleIconMove(gridDropPosition: IconPosition) {
    
    placeholderAnimation.start({
      opacity: 0,
      transition: {delay:0.3, duration: 0.5 },
    })

    await dragAnimation.start({
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    })

    updateIconPosition(props.window.elementId, gridDropPosition.gridColumnStart, gridDropPosition.gridRowStart )

    await dragAnimation.start({
      opacity: 1,
      scale: 1,
      transition: {  duration: 0.2 },
    })
  }

  const handleDrop = (e: any, ui: any) => {
    if (!isDragging) {
      return
    }
    setIsDragging(false)
    setTimeout(() => {
      setPreventClick(false)
    }, 100)

    setTimeout(() => {
      setPlaceholderPosition(null) 
    }, 500)


    const gridDropPosition = calcGridDropPosition(gridElementRef.current, { x: ui.x, y: ui.y })
    
    handleIconMove(gridDropPosition)

    setIsDragging(false)
  }

  const handleDrag = useCallback((e: any, ui: any) => {
    if (!isDragging) {
      setPreventClick(true)
      setIsDragging(true)
    }
    dragAnimation.set({opacity: 0.6})
    const gridDropPosition = calcGridDropPosition(gridElementRef.current, { x: ui.x, y: ui.y })
    setPlaceholderPosition(gridDropPosition)

    // run a check for the gridDropPosition where it looks if the position is taken, if it is, show a red placeholder
    // indicating that the drop will fail and the item won't be moved.

  }, [calcGridDropPosition, isDragging, dragAnimation])
  

  return (
    <>
      <DraggableCore onDrag={handleDrag} onStop={handleDrop}>
        <motion.div
          ref={gridElementRef}
          animate={dragAnimation}
          style={{
            gridColumnStart: props.window.iconPositionX,
            gridRowStart: props.window.iconPositionY,
            opacity: isDragging ? 0.5 : 1,
          }}>
          <button
            className="iconWrapper unstyledButton"
            onClick={handleClick}
          >
            {themeState === 'dark' ? (
              <props.window.osIcon className="pointer-events-none icon" />
            ) : (
              <img src={props.window.xpIcon} className="pointer-events-none icon" />
            )}

            <span className="caption">
              {props.window.caption}
            </span>
          </button>
        </motion.div>
      </DraggableCore>
      {placeholderPosition && (
        <motion.div
          className="placeholder"
          animate={placeholderAnimation}
          style={{
            gridColumnStart: placeholderPosition.gridColumnStart,
            gridRowStart: placeholderPosition.gridRowStart,
          }}
        />
      )}
    </>
  )
}

export default Icon