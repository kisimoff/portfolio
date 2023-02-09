import React, { useState, useRef, useEffect } from "react";
import { ReactTerminal } from "react-terminal";

import Draggable from "react-draggable";
import Window from "./Window";
import {
  useWindupString,
  WindupChildren,
  Pause,
  Linebreaker,
  Pace,
} from "windups";

const Terminal2 = ({ theme, setVisibility, zIndexxx, setZindexxx }) => {
  const [zIndexD, setzIndexD] = useState(100);

  // Define commands here
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };
  useEffect(() => {
    document.getElementById("terminal2").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
  }, []);

  return (
    <Draggable
      cancel=".close-window"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("terminal2").style.zIndex = zIndexxx;
      }}
    >
      <div id="terminal2" className="terminal2">
        <Window
          title="Terminal"
          elementId="terminal2"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field}>
          <div>
            <ReactTerminal
              showControlButtons={false}
              showControlBar={false}
              prompt="user@kisimoffOS:-$"
              commands={commands}
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal2;
