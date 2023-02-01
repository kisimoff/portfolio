import React from "react";
import trico from "../img/trico.png";

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
        <img src={trico} className="icon" />
        <span class="caption">Projects</span>
      </a>
    </div>
  );
}

export default TrIcon;
