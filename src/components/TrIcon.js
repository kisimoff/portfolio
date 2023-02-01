import React from "react";

import { ReactComponent as Trico } from "../icons/terminal.svg";
import { ReactComponent as TricoLight } from "../icons/terminalLight.svg";

function TrIcon(props) {
  return (
    <div className="iconWrapper">
      <a
        href="#"
        onClick={() => {
          var x = document.getElementById("terminal");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }}
      >
        <TricoLight className="icon"></TricoLight>
        <span class="caption">Terminal</span>
      </a>
    </div>
  );
}

export default TrIcon;
