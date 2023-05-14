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
      <div>
        <a
          className="close-window"
          style={theme.closeBtn}
          href="#"
          onClick={() => {
            setVisibilityWindow(false);
          }}
        >
          <CgClose />
        </a>
      </div>
    </div>
  );
}

export default Window;
