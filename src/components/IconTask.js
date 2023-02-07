import React from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

function IconTask(props) {
  return (
    <div id={props.selfId}>
      <div className="icon-task">
        <a
          href="#"
          onClick={() => {
            var x = document.getElementById(props.elementId);
            if (x.style.display === "block") {
              x.style.zIndex = "11";
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }}
        >
          {" "}
          <div className="icon-task-wrapper">
            <props.icon className="icon-task-icon" />
            <span className="caption-task">{props.caption}</span>
          </div>
        </a>
        <a
          href="#"
          className="close-window-task"
          onClick={() => {
            document.getElementById(props.elementId).style.display = "none";
            document.getElementById(props.selfId).style.display = "none";
          }}
        >
          <CgClose />
        </a>
      </div>
    </div>
  );
}

export default IconTask;
