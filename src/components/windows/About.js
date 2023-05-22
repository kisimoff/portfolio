import React, { useState, useRef, useEffect } from "react";

import Draggable from "react-draggable";
import about_png from "../../img/about.png";
import Window from "./Window";
import {
  useWindupString,
  WindupChildren,
  Pause,
  Linebreaker,
  Pace,
} from "windups";

const About = ({
  theme,
  textToWrite,
  setVisibility,
  zIndexxx,
  setZindexxx,
}) => {
  // Make a new component
  useEffect(() => {
    document.getElementById("about").style.zIndex = zIndexxx;
    setZindexxx(zIndexxx + 1);
  }, []);
  return (
    <Draggable
      cancel=".close-window"
      onStart={() => {
        setZindexxx(zIndexxx + 1);
        document.getElementById("about").style.zIndex = zIndexxx;
      }}
      // onMouseDown={() => {
      //   document.getElementById("projects").style.zIndex = "5";
      //   document.getElementById("deviceInfo").style.zIndex = "4";
      //   document.getElementById("about").style.zIndex = 6;
      //   document.getElementById("terminal").style.zIndex = "2";
      // }}
    >
      <div className="about" id="about">
        {/* <div id="window" style={theme.window}>
          <span id="title" style={{ color: theme.window.color }}>
            About
          </span>
          <button id="useless-btn" className="btn yellow" />
          <button
            className="btn red"
            onClick={() => {
              document.getElementById("about").style.display = "none";
            }}
          />
        </div> */}
        <Window
          title="About"
          elementId="about"
          theme={theme}
          setVisibilityWindow={setVisibility}
        />
        <div style={theme.field}>
          <div id="aboutField" className="aboutText">
            <WindupChildren>
              <Pace getPace={(char) => (char === "." ? 400 : 25)}>
                <div className="about-first">
                  <img alt="logoBoot" src={about_png} />
                  <p>
                    My tech journey began at the age of 7, when I saw my father
                    cool an overclocked GPU with dry ice. From that moment on, I
                    was hooked. As I grew up,I spent my time tinkering - modding
                    games, flashing ROMs on Androids, building RC models,
                    overclocking etc.
                    <Pause ms={600} />
                    <br></br> <br></br>
                    This hands-on experience, combined with my desire to create,
                    led me to pursue a career as a developer.
                    <Pause ms={1000} />
                  </p>
                </div>
                <p>
                  <br></br> <br></br>
                  Nowdays, I have a broad background in multiple tech fields,
                  including ai, front-end, back-end, mobile development, and
                  blockchain. This allows me to tackle problems from a variety
                  of angles and bring a unique perspective to any project. While
                  this can be seen as a strength, it may also limit my ability
                  to demonstrate a deep level of expertise in any one particular
                  area, making it harder for me to stand out as a highly-valued
                  candidate.
                  <br></br> <br></br>
                  <Pause ms={2000} />
                  For the curious mind, there's always more to discover. The
                  terminal awaits.
                </p>
              </Pace>
            </WindupChildren>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default About;
