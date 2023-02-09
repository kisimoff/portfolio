import React from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

function Icon(props) {
  return (
    <div>
      <div className="hoverIcon">
        <a
          href="#"
          className="iconWrapper"
          onClick={() => {
            if (props.visibility == true) {
              props.setZindexxx(props.zIndexxx + 1);
              document.getElementById(props.elementId).style.zIndex =
                props.zIndexxx;
            } else {
              props.setVisibility(true);
            }
          }}
        >
          <props.icon className="icon" />
          <span className="caption">
            {props.caption}
            <span> {props.line2}</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Icon;
