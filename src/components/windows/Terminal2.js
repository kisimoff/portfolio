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
      fn: () => {
        return (
          <span>
            I made you<br></br>
          </span>
        );
      },
    },
    whoami: {
      fn: () => {
        return (
          <span>
            I made you<br></br>
          </span>
        );
      },
    },
    whoami: {
      fn: () => {
        return (
          <span>
            I made you<br></br>
          </span>
        );
      },
    },
    skills: {
      fn: () => {
        return (
          <p>
            <b>Programming Languages: </b> C, C++, C#, Java, Python, Bash,
            JavaScript, TypreScript, Haskell, R, GoLang <br></br> <br></br>
            <b> Web Dev: </b> React, HTML, CSS, Node, Flask, WordPress,
            Firebase, Nginx <br></br> <br></br>
            <b> Experience with: </b>
            React-Native, MySQL, Git, Docker, Travis-Ci, NPM, Docker, Ubuntu
            Server, Hyperledger Fabric, IPFS, Tensorflow, Keras <br></br>{" "}
            <br></br>
            <b>Design: </b>
            Adobe Photoshop, Adobe Premiere Pro, Figma
          </p>
        );
      },
    },
    contact: {
      fn: () => {
        return (
          <p>
            <b>Phone Number:</b> <a href="tel:+447423533367"> +447423533367 </a>{" "}
            <br></br> <br></br>
            <b>Email:</b>
            <a href="mailto:kisimovvalentin@gmail.com">
              {" "}
              kisimovvalentin@gmail.com{" "}
            </a>{" "}
            <br></br> <br></br>
            <b>GitHub:</b>{" "}
            <a href="https://github.com/vtwenty3">
              {" "}
              https://github.com/vtwenty3{" "}
            </a>{" "}
            <br></br> <br></br>
            <b>LinkedIn:</b>{" "}
            <a href="https://www.linkedin.com/in/valentin-kisimov-2719b41a1/">
              {" "}
              https://www.linkedin.com/in/valentin-kisimov-2719b41a1/{" "}
            </a>
            <br></br> <br></br>
          </p>
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
            style={{
              backgroundColor: "#000000",
              minHeight: "200px",
              height: "35vh",
              fontSize: "16px",
              // fontSize: "calc(0.5vw + 0.6rem)",
            }}
            contentStyle={{
              color: "#FFFFFF",
              // fontSize: "calc(0.5vw + 0.6rem)",
              fontSize: "16px",
              height: "60%",
            }} // Text colour
            promptLabelStyle={{
              color: "#FFFFFF",
              // fontSize: "calc(0.6rem)",
              fontSize: "16px",
            }} // Prompt label colour
            inputTextStyle={{
              color: "red",
              // fontSize: "calc(0.5vw + 0.6rem)",
              fontSize: "16px",

              // marginTop: "2px",
            }} // Prompt text colour
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
