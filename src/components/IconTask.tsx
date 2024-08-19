import React from 'react'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { CgClose } from 'react-icons/cg'
import { useTheme } from '@contexts/ThemeContext'

function IconTask(props) {
  const { themeState, themeValues } = useTheme()

  return (
    <div id={props.selfId}>
      <div className="icon-task" style={themeValues.iconTask}>
        <a
          href="#"
          onClick={() => { 
            props.setZindexxx(props.zIndexxx + 1)
            document.getElementById(props.elementId).style.zIndex =
              props.zIndexxx
          }}
        >
          <div className="icon-task-wrapper">
            {themeState === 'dark' ? (
              <props.icon className="icon-task-icon" />
            ) : (
              <img src={props.xpIcon} className="icon-task-icon" />
            )}

            <span
              className="caption-task"
              style={themeValues.iconTaskCaption}
            >
              {props.caption}
            </span>
          </div>
        </a>
        <a
          href="#"
          style={themeState === 'dark'? {} : { display: 'none' }}
          className="close-window-task"
          onClick={() => {
            props.setVisibility(false)
          }}
        >
          <CgClose />
        </a>
      </div>
    </div>
  )
}

export default IconTask
