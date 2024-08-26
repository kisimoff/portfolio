import { CgClose } from 'react-icons/cg'
import { useTheme } from '@contexts/ThemeContext'
import { WindowProps } from '@/types'

function IconTask(props: { window: WindowProps }) {
  const { themeState, themeValues } = useTheme()

  return (
    <div id={props.window.elementId}>
      <div className="icon-task" style={themeValues.iconTask}>
        <button
          className="unstyledButton"
          onClick={props.window.openOrFocus}
        >
          <div className="icon-task-wrapper">
            {themeState === 'dark' ? (
              <props.window.osIcon className="icon-task-icon" />
            ) : (
              <img src={props.window.xpIcon} className="icon-task-icon" />
            )}

            <span
              className="caption-task"
              style={themeValues.iconTaskCaption}
            >
              {props.window.caption}
            </span>
          </div>
        </button>
        <button
          style={themeState === 'dark'? {} : { display: 'none' }}
          className="close-window-task unstyledButton"
          onClick={() => props.window.close()}
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}

export default IconTask
