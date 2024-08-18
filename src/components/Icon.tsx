import React from 'react'

function Icon(props) {
  return (
    <div>
      <a
        href="#"
        className="iconWrapper"
        onClick={() => {
          if (props.visibility == true) {
            props.setZindexxx(props.zIndexxx + 1)
            document.getElementById(props.elementId).style.zIndex =
              props.zIndexxx
          } else {
            props.setVisibility(true) 
          }
        }}
      >
        {props.theme == true ? (
          <props.icon className="icon" />
        ) : (
          // <img src={props.osIcon} className="icon" />
          <img src={props.xpIcon} className="icon" />
        )}

        <span className="caption">
          {props.caption}
          <span> {props.line2}</span>
        </span>
      </a>
    </div>
  )
}

export default Icon
