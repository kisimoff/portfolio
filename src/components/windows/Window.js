import React from "react";
import { CgClose } from "react-icons/cg";

function Window({ theme, title, elementId, setVisibilityWindow }) {
  return (
    <div id="window" style={theme.window}>
      <div className="title-wrapper">
        <span id="title" style={{ color: theme.window.color }}>
          {title}
        </span>
      </div>
      <a
        href="#"
        className="close-window"
        onClick={() => {
          setVisibilityWindow(false);

          // document.getElementById(elementId).style.display = "none";
          // document.getElementById("task-" + elementId + "-icon").style.display =
          //   "none";
        }}
      >
        <CgClose />
      </a>
    </div>
  );
}

export default Window;
