import { WindowProps } from '@/types'
import { useTheme } from '@contexts/ThemeContext'
import { DraggableCore } from 'react-draggable'
import { useWindows } from '@contexts/WindowsContext'
import { useCallback, useMemo, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { isMobile } from 'react-device-detect'
import { useMediaQuery } from 'react-responsive'

type DragPosition = {
  x?: number
  y?: number
}

type IconPosition = {
  gridColumnStart: number
  gridRowStart: number
}

function Icon(props: { window: WindowProps }) {
  const dragAnimation = useAnimation()
  const placeholderAnimation = useAnimation()
  const isSmallScreen = useMediaQuery({ maxWidth: 768 })

  const { themeState } = useTheme()
  const { updateIconPosition, isPositionFree } = useWindows()

  const gridElementRef = useRef<HTMLDivElement | null>(null)

  const [preventDrop, setPreventDrop] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [preventClick, setPreventClick] = useState(false)
  const [placeholderPosition, setPlaceholderPosition] = useState<IconPosition | null>(null)

  // export type WindowKey = 'terminal2' | 'about' | 'deviceInfo' | 'projects' | 'start' | 'credits' | 'winamp' | 'resume'

  // Define mobile positions for icons
  const mobilePositions: { [key: string]: IconPosition } = {
    winamp: { gridRowStart: 3, gridColumnStart: 1 },
    terminal2: { gridRowStart: 3, gridColumnStart: 2 },
    deviceInfo: { gridRowStart: 3, gridColumnStart: 3 },
    projects: { gridRowStart: 2, gridColumnStart: 3 },
    resume: { gridRowStart: 2, gridColumnStart: 2 },
    about: { gridRowStart: 3, gridColumnStart: 4 },
    // Add more icons as needed
  }


  // Calculate icon position based on device type
  const iconPosition = useMemo(() => {
    if (isMobile || isSmallScreen) {
      const mobilePosition = mobilePositions[props.window.elementId]
      return mobilePosition || { gridRowStart: 1, gridColumnStart: 1 } // Default position
    } else {
      return {
        gridRowStart: props.window.gridRowStart,
        gridColumnStart: props.window.gridColumnStart,
      }
    }
  }, [isMobile, isSmallScreen, props.window])

  const calcGridDropPosition = useMemo(
    () => (gridElement: HTMLElement | null, { x = 0, y = 0 }: DragPosition): IconPosition => {
      if (!gridElement) return { gridColumnStart: 0, gridRowStart: 0 }

      const gridRowHeight = 100
      const gridColumnWidth = 100
      const gridColumnGap = 0
      const gridRowGap = 0
      const paddingTop = 8

      return {
        gridColumnStart: Math.min(Math.ceil(x / (gridColumnWidth + gridColumnGap))),
        gridRowStart: Math.min(Math.ceil((y - paddingTop) / (gridRowHeight + gridRowGap))),
      }
    },
    []
  )

  const handleClick = () => {
    if (preventClick) {
      return
    }
    props.window.openOrFocus()
  }

  async function handleIconMove(gridDropPosition: IconPosition) {
    placeholderAnimation.start({
      opacity: 0,
      transition: { delay: 0.3, duration: 0.5 },
    })

    await dragAnimation.start({
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    })

    updateIconPosition(props.window.elementId, gridDropPosition)

    await dragAnimation.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    })
  }

  const handleDrop = (e: any, ui: any) => {
    if (!isDragging || preventDrop) {
      // Preventing triggering the rest of the code on click
      setIsDragging(false)
      setPlaceholderPosition(null)
      dragAnimation.set({ opacity: 1 })
      return
    }

    setTimeout(() => {
      // Preventing unintentional click event on drop
      setPreventClick(false)
    }, 100)

    setTimeout(() => {
      // Used for animations
      setPlaceholderPosition(null)
    }, 500)

    setIsDragging(false)

    const gridDropPosition = calcGridDropPosition(gridElementRef.current, { x: ui.x, y: ui.y })

    handleIconMove(gridDropPosition)
  }

  const handleDrag = useCallback(
    (e: any, ui: any) => {
      if (!isDragging) {
        // setPreventClick(true)
        setIsDragging(true)
      }
      dragAnimation.set({ opacity: 0.6 })
      const gridDropPosition = calcGridDropPosition(gridElementRef.current, { x: ui.x, y: ui.y })
      setPlaceholderPosition(gridDropPosition)
      setPreventDrop(!isPositionFree(gridDropPosition))
    },
    [calcGridDropPosition, isDragging, dragAnimation, isPositionFree]
  )

  return (
    <>
      {isMobile || isSmallScreen ? (
        <motion.div
          ref={gridElementRef}
          animate={dragAnimation}
          style={{
            gridColumnStart: iconPosition.gridColumnStart,
            gridRowStart: iconPosition.gridRowStart,
          }}
          className='gridElement-mobile'
        >
          <button className="iconWrapper-mobile unstyledButton" onClick={handleClick}>
            {themeState === 'dark' ? (
              props.window.elementId !== 'winamp' ? (
                <props.window.osIcon className="pointer-events-none icon" />
              ) : (
                <img src={props.window.osIcon} className="pointer-events-none icon" />
              )
            ) : (
              <img src={props.window.xpIcon} className="pointer-events-none icon" />
            )}
            <span className="caption">{props.window.caption}</span>
          </button>
        </motion.div>
      ) : (
        <DraggableCore onDrag={handleDrag} onStop={handleDrop}>
          <motion.div
            ref={gridElementRef}
            animate={dragAnimation}
            style={{
              gridColumnStart: iconPosition.gridColumnStart,
              gridRowStart: iconPosition.gridRowStart,
            }}
          >
            <button className="iconWrapper unstyledButton" onClick={handleClick}>
              {themeState === 'dark' ? (
                props.window.elementId !== 'winamp' ? (
                  <props.window.osIcon className="pointer-events-none icon" />
                ) : (
                  <img src={props.window.osIcon} className="pointer-events-none icon" />
                )
              ) : (
                <img src={props.window.xpIcon} className="pointer-events-none icon" />
              )}
              <span className="caption">{props.window.caption}</span>
            </button>
          </motion.div>
        </DraggableCore>
      )}
      {!isMobile && placeholderPosition && (
        <motion.div
          className="placeholder"
          animate={placeholderAnimation}
          style={{
            backgroundColor: preventDrop ? 'rgba(155, 0, 0, 0.15)' : 'rgba(165, 165, 165, 0.14)',
            gridColumnStart: placeholderPosition.gridColumnStart,
            gridRowStart: placeholderPosition.gridRowStart,
          }}
        />
      )}
    </>
  )
}

export default Icon
