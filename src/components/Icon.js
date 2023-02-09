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
            var x = document.getElementById(props.elementId);
            var y = document.getElementById(
              "task-" + props.elementId + "-icon"
            );
            // if (x.style.display === "none") {
            x.style.zIndex = "10";
            x.style.display = "block";
            y.style.display = "block";
            // } else {
            //   x.style.display = "none";
            //   y.style.display = "none";
            // }
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
