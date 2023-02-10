import React, { useState, useRef, useEffect } from "react";
import Terminal from "react-console-emulator";

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
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },

    delay: {
      description: "Delays return of value by 1000 ms.",
      fn: () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve("Finished!"), 1000);
        });
      },
    },

    whomadewho: {
      description: "Optional description",
      usage: "Optional usage instruction",
      fn: () => {
        return (
          <span>
            I made you<br></br>
          </span>
        );
      },
    },
  };
  useEffect(() => {
    document.getElementById("terminal2").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
  }, []);

  return (
    <Draggable
      cancel=".close-window, .no-drag"
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
        <div style={theme.field} className="terminal-wrapper">
          <Terminal
            className="no-drag"
            ignoreCommandCase={true}
            autoFocus={true}
            style={{ backgroundColor: "#000000", maxHeight: "500px" }}
            contentStyle={{
              color: "#FFFFFF",
              fontSize: "calc(0.5vw + 0.6rem)",
              height: "60%",
            }} // Text colour
            promptLabelStyle={{ color: "#FFFFFF" }} // Prompt label colour
            inputTextStyle={{ color: "red" }} // Prompt text colour
            promptLabel={
              <div id="query">
                <span style={{ color: "#26a269" }}>root@user</span>:
                <span style={{ color: "#08458f" }}>
                  <strong>~</strong>
                </span>
                $
              </div>
            }
            messageStyle={{ color: "#FFFFFF" }} // Message colour
            commands={commands}
            welcomeMessage={
              "KisimoffOS [Version 2.3.1] \n (c) All rights reserved. \n Type help to list commands. \n \n"
            }
          />
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal2;
