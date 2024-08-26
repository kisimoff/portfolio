import { WindowProps } from '@/types'
import { useTheme } from '@contexts/ThemeContext'

function Icon(props: { window: WindowProps }) {

  const { themeState } = useTheme()

  return (
    <div>
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
  )
}

export default Icon
