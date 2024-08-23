import { useTheme } from '@contexts/ThemeContext'
import { useWindows } from '@contexts/WindowsContext'

function Icon(props) {
  const { themeState } = useTheme()
  // const { iconsConfig, windowQueue, bringWindowToFront } = useWindows()

  return (
    <div>
      <button
        className="iconWrapper unstyledButton"
        onClick={() => {
          if (props.visibility) {
            props.increaseZIndex()
          } else {
            props.setVisibility(true) 
          }
        }}
      >
        {themeState === 'dark' ? (
          <props.icon className="icon" />
        ) : (
          <img src={props.xpIcon} className="icon" />
        )}

        <span className="caption">
          {props.caption}
          <span> {props.line2}</span>
        </span>
      </button>
    </div>
  )
}

export default Icon
