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

    whoami: {
      description: "Optional description",
      usage: "Optional usage instruction",
      fn: () => {
        return (
          <span>
            I am a React component!<br></br> <br></br>
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
    // <Draggable
    //   cancel=".close-window"
    //   onStart={() => {
    //     setZindexxx(zIndexxx + 1);
    //     document.getElementById("terminal2").style.zIndex = zIndexxx;
    //   }}
    // >
    <div id="terminal2" className="terminal2">
      <Window
        title="Terminal"
        elementId="terminal2"
        theme={theme}
        setVisibilityWindow={setVisibility}
      />
      <div style={theme.field}>
        <Terminal
          noEchoBack
          contentStyle={{ color: "#FF8E00" }} // Text colour
          promptLabelStyle={{ color: "#FFFFFF" }} // Prompt label colour
          inputTextStyle={{ color: "red" }} // Prompt text colour
          promptLabel={
            <span>
              <b>root@KisimoffOS:~$</b>
            </span>
          }
          commands={commands}
          welcomeMessage={
            "KisimoffOS [Version 2.3.1] \n (c) All rights reserved. \n Type help to list commands. \n \n"
          }
        />
      </div>
    </div>
    /* </Draggable> */
  );
};

export default Terminal2;
