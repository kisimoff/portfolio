import React from 'react'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { CgClose } from 'react-icons/cg'

function IconTask(props) {
  return (
    <div id={props.selfId}>
      <div className="icon-task" style={props.themeVars.iconTask}>
        <a
          href="#"
          onClick={() => { 
            props.setZindexxx(props.zIndexxx + 1)
            document.getElementById(props.elementId).style.zIndex =
              props.zIndexxx
          }}
        >
          <div className="icon-task-wrapper">
            {props.theme == true ? (
              <props.icon className="icon-task-icon" />
            ) : (
              <img src={props.xpIcon} className="icon-task-icon" />
            )}

            <span
              className="caption-task"
              style={props.themeVars.iconTaskCaption}
            >
              {props.caption}
            </span>
          </div>
        </a>
        <a
          href="#"
          style={props.theme == true ? {} : { display: 'none' }}
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
