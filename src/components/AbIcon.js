import React from "react";

import { ReactComponent as Abico } from "../icons/about.svg";
import { ReactComponent as AbicoLight } from "../icons/aboutLight.svg";

function AbIcon(props) {
  return (
    <div className="iconWrapper">
      <a
        href="#"
        onClick={() => {
          var x = document.getElementById("about");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }}
      >
        <AbicoLight className="icon"></AbicoLight>
        <span class="caption">About</span>
      </a>
    </div>
  );
}

export default AbIcon;
